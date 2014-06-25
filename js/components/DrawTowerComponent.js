DrawTowerComponent.prototype = new DrawComponent();
DrawTowerComponent.prototype.constructor = DrawTowerComponent;

function DrawTowerComponent(red, green, blue, alpha) {

    DrawComponent.call(this, red, green, blue, alpha);
    this.TID = 'DrawTowerComponent';

    return this;

};