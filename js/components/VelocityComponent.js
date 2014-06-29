VelocityComponent.prototype = new Component();
VelocityComponent.prototype.constructor = VelocityComponent;

function VelocityComponent(a, b) {

    Component.call(this);
    this.TID = 'VelocityComponent';

    var x = a;
    var y = b;


    if(a instanceof PositionComponent && b instanceof PositionComponent) {

        var deltaX = b.getRealPositionX() - a.getRealPositionX();
        var deltaY = b.getRealPositionY() - a.getRealPositionY();
        var hypotenuse = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        x = deltaX / hypotenuse;
        y = deltaY / hypotenuse;

    }

    this.setX(x);
    this.setY(y);

    return this;

};

VelocityComponent.prototype.setVelocity = function (velocity) {

    this.setX(velocity.x);
    this.setY(velocity.y);

    return this;

};

VelocityComponent.prototype.getVelocity = function () {

    return {
        x: this.x,
        y: this.y
    };

};

VelocityComponent.prototype.getX = function () {

    return this.x;

};

VelocityComponent.prototype.getY = function () {

    return this.y;

};

VelocityComponent.prototype.setX = function (x) {

    this.x = x;
    return this;

};

VelocityComponent.prototype.setY = function (y) {

    this.y = y;
    return this;

};