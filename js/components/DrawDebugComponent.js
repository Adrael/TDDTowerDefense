DrawDebugComponent.prototype = new DrawComponent();
DrawDebugComponent.prototype.constructor = DrawDebugComponent;

function DrawDebugComponent(red, green, blue, alpha) {

    DrawComponent.call(this, red, green, blue, alpha);
    this.TID = 'DrawDebugComponent';

    return this;

};