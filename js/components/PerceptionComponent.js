PerceptionComponent.prototype = new Component();
PerceptionComponent.prototype.constructor = PerceptionComponent;

function PerceptionComponent(radius) {

    Component.call(this);
    this.TID = 'PerceptionComponent';

    this.setRadius(radius);

    return this;

};

PerceptionComponent.prototype.getRadius = function () {

    return this.radius;

};

PerceptionComponent.prototype.setRadius = function (radius) {

    this.radius = radius;
    return this;

};