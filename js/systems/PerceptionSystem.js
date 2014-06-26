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

        if(circleCollisionComponentA.intersects(circleCollisionComponentB) && referrerComponentA.getTypeIdentifier() === 'Tower') {

            var referrerPositionComponent = referrerComponentB.getComponent('PositionComponent');
            var positionComponent = new PositionComponent(referrerPositionComponent.getX(), referrerPositionComponent.getY());
            referrerComponentA.addComponent(new AimingComponent(positionComponent));

        }
    }

    return this;

};