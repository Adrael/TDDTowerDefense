TimeToLiveSystem.prototype = new DelayedEntityProcessingSystem();
TimeToLiveSystem.prototype.constructor = TimeToLiveSystem;

function TimeToLiveSystem() {

    DelayedEntityProcessingSystem.call(this);
    this.TID = 'TimeToLiveSystem';

    this.workOn(['TimeToLiveComponent']);

};

TimeToLiveSystem.prototype.getRemainingDelay = function (entity) {

    var timeToLiveComponent = entity.getComponent('TimeToLiveComponent');
    if(timeToLiveComponent !== null) {

        return timeToLiveComponent.getTimeToLive();

    }

    return null;

};

TimeToLiveSystem.prototype.processDelta = function (entity, delay) {

    var timeToLiveComponent = entity.getComponent('TimeToLiveComponent');
    if(timeToLiveComponent !== null) {

        var delta = timeToLiveComponent.getTimeToLive() - delay;
        timeToLiveComponent.setTimeToLive(delta);

    }

    return this;

};

TimeToLiveSystem.prototype.processExpired = function (entity) {

    entity.addComponent(new DeadEntityComponent());
    return this;

};