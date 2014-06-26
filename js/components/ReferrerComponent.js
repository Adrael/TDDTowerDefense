ReferrerComponent.prototype = new Component();
ReferrerComponent.prototype.constructor = ReferrerComponent;

function ReferrerComponent(entity) {

    Component.call(this);
    this.TID = 'ReferrerComponent';

    this.setReferrer(entity);

    return this;

};

ReferrerComponent.prototype.setReferrer = function (entity) {

    this.referrer = entity;
    return this;

};

ReferrerComponent.prototype.getReferrer = function () {

    return this.referrer;

};