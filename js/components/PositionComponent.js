PositionComponent.prototype = new Component();
PositionComponent.prototype.constructor = PositionComponent;

function PositionComponent(x, y) {

    Component.call(this);
    this.TID = 'PositionComponent';

    this.setX(x);
    this.setY(y);
    this.setOrigin(null);

    return this;

};

PositionComponent.prototype.getX = function () {

    return this.x;

};

PositionComponent.prototype.getY = function () {

    return this.y;

};

PositionComponent.prototype.setX = function (x) {

    this.x = x;
    return this;

};

PositionComponent.prototype.setY = function (y) {

    this.y = y;
    return this;

};

PositionComponent.prototype.setPosition = function (position) {

    this.setX(position.x);
    this.setY(position.y);

    return this;

};

PositionComponent.prototype.getPosition = function () {

    return {
        x: this.x,
        y: this.y
    };

};

PositionComponent.prototype.setOrigin = function (origin) {

    this.origin = origin;
    return this;

};

PositionComponent.prototype.getOrigin = function () {

    return this.origin;

};

PositionComponent.prototype.getRealPositionX = function () {

    if (this.origin === null) {

        return this.x;

    }

    return this.origin.getRealPositionX() + this.x;

};

PositionComponent.prototype.getRealPositionY = function () {

    if (this.origin === null) {

        return this.y;

    }

    return this.origin.getRealPositionY() + this.y;

};