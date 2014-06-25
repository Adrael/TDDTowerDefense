DrawComponent.prototype = new Component();
DrawComponent.prototype.constructor = DrawComponent;

function DrawComponent() {

	Component.call(this);
	this.TID = 'DrawComponent';

    return this;

};