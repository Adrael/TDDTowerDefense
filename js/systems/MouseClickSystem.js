MouseClickSystem.prototype = new EntityProcessingComponent();
MouseClickSystem.prototype.constructor = MouseClickSystem;

function MouseClickSystem() {

    Component.call(this);
    this.TID = 'MouseClickSystem';

    this.workOn(['MouseClickComponent']);

};

MouseClickSystem.prototype.processEntity = function(entity) {

    console.log('entity')

    return this;

};

MouseClickSystem.prototype.processEvent = function (event) {

    console.log('there')

    if(event.type === 'click') {

        console.log('Processing click event');

    }

    return this;

};