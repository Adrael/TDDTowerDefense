function EntityProcessingSystem () {

	this.TID = 'EntityProcessingSystem';

	this.entities = [];
	this.aspects = [];

	return this;

}

EntityProcessingSystem.prototype.setTypeIdentifier = function(TID) {
	
	this.TID = TID;
	return this;

};

EntityProcessingSystem.prototype.workOn = function(aspects) {
	
	this.aspects = aspects;
	return this;

};

EntityProcessingSystem.prototype.exclude = function(excludedAspects) {
	
	this.excludedAspects = excludedAspects;
	return this;

};

EntityProcessingSystem.prototype.parseEntities = function (entities) {

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

EntityProcessingSystem.prototype.processEntities = function (entities) {

    this.parseEntities(entities);
    this.process();

	return this;

};



EntityProcessingSystem.prototype.processEventEntities = function (entities, event) {

    this.parseEntities(entities);
    this.processEvent(event);
    return this;

};

EntityProcessingSystem.prototype.processEvent = function (event) {

    return this;

};

EntityProcessingSystem.prototype.entityContainsComponent = function(entityComponents, component) {
	
	for(var i in entityComponents) {
		if(entityComponents[i].getTypeIdentifier() === component) {
			return true;
		}
	}

	return false;

};

EntityProcessingSystem.prototype.setEntities = function(entities) {
	
	this.entities = entities;
	return this;

};

EntityProcessingSystem.prototype.process = function() {

	for(var i in this.entities) {

		this.processEntity(this.entities[i]);

	}

	return this;

};

EntityProcessingSystem.prototype.processEntity = function(entity) {
	
	return this;

};