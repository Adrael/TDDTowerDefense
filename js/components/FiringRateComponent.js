FiringRateComponent.prototype = new Component();
FiringRateComponent.prototype.constructor = FiringRateComponent;

function FiringRateComponent(delay) {

    Component.call(this);
    this.TID = 'FiringRateComponent';

    this.setDelay(delay < 0 ? 100 : delay);
    this.currentDelay = delay;

    return this;

};

FiringRateComponent.prototype.setDelay = function (delay) {

    this.delay = delay;
    this.resetDelay();

    return this;

};

FiringRateComponent.prototype.getDelay = function () {

    return this.delay;

};

FiringRateComponent.prototype.getActualDelay = function () {

    return this.currentDelay;

};

FiringRateComponent.prototype.resetDelay = function () {

    this.currentDelay = this.delay;
    return this;

};