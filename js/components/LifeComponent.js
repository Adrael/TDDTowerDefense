LifeComponent.prototype = new Component();
LifeComponent.prototype.constructor = LifeComponent;

function LifeComponent(life, maxLife) {

    Component.call(this);
    this.TID = 'LifeComponent';

    this.setLife(life);

    if(!maxLife) {

        maxLife = life;

    }

    this.setMaxLife(maxLife);

    return this;

};

LifeComponent.prototype.setLife = function (life) {

    this.life = life;
    return this;

};

LifeComponent.prototype.getLife = function () {

    return this.life;

};

LifeComponent.prototype.setMaxLife = function (maxLife) {

    this.maxLife = maxLife;
    return this;

};

LifeComponent.prototype.getMaxLife = function () {

    return this.maxLife;

};