DeadEntitySystem.prototype = new EntityProcessingSystem();
DeadEntitySystem.prototype.constructor = DeadEntitySystem;

function DeadEntitySystem() {

    EntityProcessingSystem.call(this);
	this.TID = 'DeadEntitySystem';

	this.workOn(['DeadEntityComponent']);

};

DeadEntitySystem.prototype.processEntity = function(entity) {

    var world = entity.getWorld();
    if(world) {

        world.removeFoe(entity);
    	world.removeEntity(entity);

    }

    entity.destroy();

    return this;

};