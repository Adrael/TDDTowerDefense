PositionComponent.prototype = new Component();
PositionComponent.prototype.constructor = PositionComponent;

function PositionComponent(x, y) {

    Component.call(this);
    this.TID = 'PositionComponent';

    this.x = x;
    this.y = y;

    return this;

};

PositionComponent.prototype.getPosition = function () {

    return {
        x: this.x,
        y: this.y
    };

};