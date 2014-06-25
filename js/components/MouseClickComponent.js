MouseClickComponent.prototype = new Component();
MouseClickComponent.prototype.constructor = MouseClickComponent;

function MouseClickComponent() {

    Component.call(this);
    this.TID = 'MouseClickComponent';

    return this;

};