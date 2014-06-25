function VoidProcessingSystem () {

    this.TID = 'VoidProcessingSystem';

    return this;

}

VoidProcessingSystem.prototype.setTypeIdentifier = function(TID) {

    this.TID = TID;
    return this;

};

VoidProcessingSystem.prototype.processEvent = function (event) {

    return this;

};

VoidProcessingSystem.prototype.processEntities = function() {

    this.processEntity();

    return this;

};

VoidProcessingSystem.prototype.processEventEntities = function (entities, event) {

    this.processEvent(event);
    return this;

};

VoidProcessingSystem.prototype.processEntity = function(entity) {

    return this;

};