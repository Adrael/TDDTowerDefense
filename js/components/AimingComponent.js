AimingComponent.prototype = new Component();
AimingComponent.prototype.constructor = AimingComponent;

function AimingComponent(position) {

    Component.call(this);
    this.TID = 'AimingComponent';

    this.setPosition(position);

    return this;

};

AimingComponent.prototype.setPosition = function (position) {

    this.position = position;
    return this;

};

AimingComponent.prototype.getPosition = function () {

    return this.position;

};