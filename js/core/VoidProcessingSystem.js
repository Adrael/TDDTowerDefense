VoidProcessingSystem.prototype = new System();
VoidProcessingSystem.prototype.constructor = VoidProcessingSystem;

function VoidProcessingSystem () {

    System.call(this);
    this.TID = 'VoidProcessingSystem';

    return this;

}

VoidProcessingSystem.prototype.processEntities = function() {

    this.processEntity();

    return this;

};

VoidProcessingSystem.prototype.processEventEntities = function (entities, event) {

    this.processEvent(event);
    return this;

};