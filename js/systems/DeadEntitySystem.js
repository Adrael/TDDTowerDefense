DeadEntitySystem.prototype = new EntityProcessingComponent();
DeadEntitySystem.prototype.constructor = DeadEntitySystem;

function DeadEntitySystem() {

	Component.call(this);
	this.TID = 'DeadEntitySystem';

	this.workOn(['DeadEntityComponent']);

};

DeadEntitySystem.prototype.processEntity = function(entity) {

    var world = entity.getWorld();
    if(world) {
    	world.removeEntity(entity);
    }

    entity.destroy();
    delete entity;

    return this;

};