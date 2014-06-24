PositionComponent.prototype = new Component();
PositionComponent.prototype.constructor = PositionComponent;

function PositionComponent(x, y) {

    Component.call(this);
    this.TID = 'SizeComponent';

    this.x = x;
    this.y = y;

    return this;

};