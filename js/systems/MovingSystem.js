MovingSystem.prototype = new EntityProcessingSystem();
MovingSystem.prototype.constructor = MovingSystem;

function MovingSystem(world) {

    EntityProcessingSystem.call(this);
    this.TID = 'MovingSystem';

    this.workOn(['VelocityComponent', 'PositionComponent', 'SpeedComponent']);

    this.world = world;

};

MovingSystem.prototype.processEntity = function(entity) {

    var speed    = entity.getComponent('SpeedComponent');
    var position = entity.getComponent('PositionComponent');
    var velocity = entity.getComponent('VelocityComponent');

    if(speed !== null && position !== null && velocity !== null) {

        position.setX(position.getX() + (velocity.getX() * speed.getSpeed() * this.world.getDelta() / 1000));
        position.setY(position.getY() + (velocity.getY() * speed.getSpeed() * this.world.getDelta() / 1000));

    }

    return this;

};