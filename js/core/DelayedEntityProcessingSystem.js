DelayedEntityProcessingSystem.prototype = new System();
DelayedEntityProcessingSystem.prototype.constructor = DelayedEntityProcessingSystem;

function DelayedEntityProcessingSystem () {

    System.call(this);
    this.TID = 'DelayedEntityProcessingSystem';

    return this;

}

DelayedEntityProcessingSystem.prototype.getRemainingDelay = function (entity) {

    return this;

};

DelayedEntityProcessingSystem.prototype.processDelayedBefore = function (entities, delta) {

    this.parseEntities(entities);
    this.processDelayed(delta);
    return this;

};

DelayedEntityProcessingSystem.prototype.processDelayed = function (delta) {

    for(var i in this.entities) {

        this.processDelta(this.entities[i], delta);

        var remainingDelay = this.getRemainingDelay(this.entities[i]);
        if(remainingDelay <= 0 || remainingDelay === null) {

            this.processExpired(this.entities[i]);

        }

    }

    return this;

};

DelayedEntityProcessingSystem.prototype.processDelta = function (entity, delta) {

    return this;

};

DelayedEntityProcessingSystem.prototype.processExpired = function (entity) {

    return this;

};