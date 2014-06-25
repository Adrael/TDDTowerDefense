DrawBulletComponent.prototype = new DrawComponent();
DrawBulletComponent.prototype.constructor = DrawBulletComponent;

function DrawBulletComponent(red, green, blue, alpha) {

    DrawComponent.call(this, red, green, blue, alpha);
    this.TID = 'DrawBulletComponent';

    return this;

};