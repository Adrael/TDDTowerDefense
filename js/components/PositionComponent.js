PositionComponent.prototype = new Component();
PositionComponent.prototype.constructor = PositionComponent;

function PositionComponent(x, y) {

	Component.call(this);
	this.TID = 'PositionComponent';

	this.x = x;
	this.y = y;

};