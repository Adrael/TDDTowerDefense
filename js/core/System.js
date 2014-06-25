function System () {

    this.TID = 'System';

    this.entities = [];
    this.aspects = [];

    return this;

}

System.prototype.setTypeIdentifier = function(TID) {

    this.TID = TID;
    return this;

};

System.prototype.getTypeIdentifier = function() {

    return this.TID;

};

System.prototype.workOn = function(aspects) {

    this.aspects = aspects;
    return this;

};

System.prototype.exclude = function(excludedAspects) {

    this.excludedAspects = excludedAspects;
    return this;

};

System.prototype.parseEntities = function (entities) {

    this.entities = [];

    if (this.aspects.length === 0) {

        this.entities = entities;

    } else {

        for (var i in entities) {

            var entityComponents = entities[i].getComponents();
            var isValidEntity = true;

            for (var j in this.aspects) {
                if (!this.entityContainsComponent(entityComponents, this.aspects[j])) {
                    isValidEntity = false;
                    break;
                }

            }

            if (isValidEntity) {

                for (var k in this.excludedAspects) {
                    if (this.entityContainsComponent(entityComponents, this.excludedAspects[k])) {
                        isValidEntity = false;
                        break;
                    }
                }

                if (isValidEntity) {
                    this.entities.push(entities[i]);
                }
            }
        }
    }

    return this;
};

System.prototype.processEntities = function (entities) {

    this.parseEntities(entities);
    this.process();

    return this;

};



System.prototype.processEventEntities = function (entities, event) {

    this.parseEntities(entities);
    this.processEvent(event);
    return this;

};

System.prototype.processEvent = function (event) {

    return this;

};

System.prototype.entityContainsComponent = function(entityComponents, component) {

    for(var i in entityComponents) {
        if(entityComponents[i].getTypeIdentifier() === component) {
            return true;
        }
    }

    return false;

};

System.prototype.setEntities = function(entities) {

    this.entities = entities;
    return this;

};

System.prototype.getEntities = function() {

    return this.entities;

};

System.prototype.process = function() {

    for(var i in this.entities) {

        this.processEntity(this.entities[i]);

    }

    return this;

};

System.prototype.processEntity = function(entity) {

    return this;

};