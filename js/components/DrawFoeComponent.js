DrawFoeComponent.prototype = new DrawComponent();
DrawFoeComponent.prototype.constructor = DrawFoeComponent;

function DrawFoeComponent(red, green, blue, alpha) {

    DrawComponent.call(this, red, green, blue, alpha);
    this.TID = 'DrawFoeComponent';

    return this;

};