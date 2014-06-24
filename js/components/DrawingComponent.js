DrawingComponent.prototype = new Component();
DrawingComponent.prototype.constructor = DrawingComponent;

function DrawingComponent() {

	Component.call(this);
	this.TID = 'DrawingComponent';

};