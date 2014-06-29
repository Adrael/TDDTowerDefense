PerceptionSystem.prototype = new EntityProcessingSystem();
PerceptionSystem.prototype.constructor = PerceptionSystem;

function PerceptionSystem(world) {

    EntityProcessingSystem.call(this);
    this.TID = 'PerceptionSystem';

    this.workOn(['ReferrerComponent', 'PositionComponent', 'CircleCollisionComponent']);

    this.setWorld(world);

};

PerceptionSystem.prototype.setWorld = function (world) {

    this.world = world;
    return this;

};

PerceptionSystem.prototype.processEntity = function(entity) {

    var entities = this.world.getEntitiesWithComponent('CircleCollisionComponent');
    var circleCollisionComponentA = entity.getComponent('CircleCollisionComponent');
    var referrerComponentA = entity.getComponent('ReferrerComponent').getReferrer();

    referrerComponentA.removeComponent('AimingComponent');

    for(var i in entities) {

        var referrerComponentB = entities[i].getComponent('ReferrerComponent');
        if(referrerComponentB === null) {

            continue;

        }

        referrerComponentB = referrerComponentB.getReferrer();

        var circleCollisionComponentB = entities[i].getComponent('CircleCollisionComponent');

        if((circleCollisionComponentA === circleCollisionComponentB) || (referrerComponentB.getTypeIdentifier() === 'Tower' && referrerComponentA.getTypeIdentifier() === 'Tower')) {

            continue;

        }

        if(circleCollisionComponentA.intersects(circleCollisionComponentB)) {

            if(referrerComponentA.getTypeIdentifier() === 'Tower') {

                var referrerPositionComponent = referrerComponentB.getComponent('PositionComponent');
                var positionComponent = new PositionComponent(referrerPositionComponent.getRealPositionX(), referrerPositionComponent.getY());
                referrerComponentA.addComponent(new AimingComponent(positionComponent));

//                this.world.pause();
//                console.clear();
//                console.log('Target', positionComponent);
//                console.log(referrerComponentA.getTypeIdentifier(), referrerComponentA.getComponent('PositionComponent'));
//                console.log(referrerComponentB.getTypeIdentifier(), referrerComponentB.getComponent('PositionComponent'));

            }

            else if(referrerComponentA.getTypeIdentifier() === 'Bullet') {

                var bulletPowerComponentA = referrerComponentA.getComponent('BulletPowerComponent');
                var lifeComponentB = referrerComponentB.getComponent('LifeComponent');
                if(bulletPowerComponentA !== null && lifeComponentB !== null) {

                    referrerComponentA.addComponent(new DeadEntityComponent());
                    var life = lifeComponentB.getLife() - bulletPowerComponentA.getPower();
                    if(life <= 0) {

                        referrerComponentB.addComponent(new DeadEntityComponent());

                        entities[i].addComponent(new DeadEntityComponent());
                    }

                    else {


                        lifeComponentB.setLife(life);
                    }


                }

            }

            else {

//                console.clear();
//                console.log('---------------------');
//                console.log('A', referrerComponentA.getTypeIdentifier());
//                console.log('B', referrerComponentB.getTypeIdentifier());

            }

        }

    }

    return this;

};