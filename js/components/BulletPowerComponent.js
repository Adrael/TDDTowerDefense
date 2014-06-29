BulletPowerComponent.prototype = new Component();
BulletPowerComponent.prototype.constructor = BulletPowerComponent;

function BulletPowerComponent(power) {

    Component.call(this);
    this.TID = 'BulletPowerComponent';

    this.setPower(power);

    return this;

};

BulletPowerComponent.prototype.setPower = function (power) {

    this.power = power;
    return this;

};

BulletPowerComponent.prototype.getPower = function () {

    return this.power;

};