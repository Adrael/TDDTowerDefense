SpeedComponent.prototype = new Component();
SpeedComponent.prototype.constructor = SpeedComponent;

function SpeedComponent(speed) {

    Component.call(this);
    this.TID = 'SpeedComponent';

    this.setSpeed(speed);

    return this;

};

SpeedComponent.prototype.setSpeed = function (speed) {

    this.speed = speed;
    return this;

};

SpeedComponent.prototype.getSpeed = function () {

    return this.speed;

};