CircleCollisionComponent.prototype = new Component();
CircleCollisionComponent.prototype.constructor = CircleCollisionComponent;

function CircleCollisionComponent(position, radius) {

    Component.call(this);
    this.TID = 'CircleCollisionComponent';

    this.setPosition(position);
    this.setRadius(radius);

    return this;

};

CircleCollisionComponent.prototype.setPosition = function (position) {

    this.position = position;
    return this;

};

CircleCollisionComponent.prototype.getPosition = function () {

    return this.position;

};

CircleCollisionComponent.prototype.setRadius = function (radius) {

    this.radius = radius;
    return this;

};

CircleCollisionComponent.prototype.getRadius = function () {

    return this.radius;

};

CircleCollisionComponent.prototype.intersects = function (circleCollisionComponent) {

    var xA = this.position.getX();
    var xB = circleCollisionComponent.getPosition().getX();

    var yA = this.position.getY();
    var yB = circleCollisionComponent.getPosition().getY();

    var distX = (xA - xB);
    var distY = (yA - yB);
    var squareRootDist = Math.sqrt((distX * distX) + (distY * distY));

    var radiusA = this.radius;
    var radiusB = circleCollisionComponent.getRadius();
    var sumRadius = (radiusA + radiusB);

    return squareRootDist <= sumRadius;

};