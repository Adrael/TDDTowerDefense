TimeToLiveComponent.prototype = new Component();
TimeToLiveComponent.prototype.constructor = TimeToLiveComponent;

function TimeToLiveComponent(ttl) {

    Component.call(this);
    this.TID = 'TimeToLiveComponent';

    this.setTimeToLive(ttl);

    return this;

};

TimeToLiveComponent.prototype.setTimeToLive = function (ttl) {

    this.ttl = ttl;
    return this;

};

TimeToLiveComponent.prototype.getTimeToLive = function () {

    return this.ttl;

};