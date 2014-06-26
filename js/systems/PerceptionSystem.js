PerceptionSystem.prototype = new EntityProcessingSystem();
PerceptionSystem.prototype.constructor = PerceptionSystem;

function PerceptionSystem(world) {

    EntityProcessingSystem.call(this);
    this.TID = 'PerceptionSystem';

    this.workOn(['PerceptionComponent', 'PositionComponent']);

    this.setWorld(world);

};

PerceptionSystem.prototype.setWorld = function (world) {

    this.world = world;
    return this;

};

PerceptionSystem.prototype.processEntity = function(entity) {

    var foes = this.world.getFoes();

    var perceptionComponent = entity.getComponent('PerceptionComponent');
    var positionComponent = entity.getComponent('PositionComponent');

    if(perceptionComponent !== null && positionComponent !== null) {

        entity.removeComponent('AimingComponent');

        for (var i in foes) {

            var foePositionComponent = foes[i].getComponent('PositionComponent');
            var deltaX = Math.abs(foePositionComponent.getRealPositionX() - positionComponent.getRealPositionX());
            var deltaY = Math.abs(foePositionComponent.getRealPositionY() - positionComponent.getRealPositionY());

//            console.log(deltaX, deltaY)
//            console.log(deltaX * deltaX + deltaY * deltaY, perceptionComponent.getRadius() * perceptionComponent.getRadius())

            if (deltaX * deltaX + deltaY * deltaY < perceptionComponent.getRadius() * perceptionComponent.getRadius()) {

                entity.addComponent(new AimingComponent(foePositionComponent))
                console.log('adding aiming')

            }

        }

    }

    return this;

};