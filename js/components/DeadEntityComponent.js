DeadEntityComponent.prototype = new Component();
DeadEntityComponent.prototype.constructor = DeadEntityComponent;

function DeadEntityComponent() {

	Component.call(this);
	this.TID = 'DeadEntityComponent';

    return this;

};