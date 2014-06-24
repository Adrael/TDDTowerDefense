function EntityProcessingComponent () {

	this.TID = 'EntityProcessingComponent';

	this.entities = [];
	this.aspects = [];

	return this;

}

EntityProcessingComponent.prototype.setTypeIdentifier = function(TID) {
	
	this.TID = TID;
	return this;

};

EntityProcessingComponent.prototype.workOn = function(aspects) {
	
	this.aspects = aspects;
	return this;

};

EntityProcessingComponent.prototype.exclude = function(excludedAspects) {
	
	this.excludedAspects = excludedAspects;
	return this;

};

EntityProcessingComponent.prototype.checkEntities = function(entities) {
	
	for(var i in entities) {
		var entityComponents = entities[i].getComponents();
		var isValidEntity = true;

		for(var j in this.aspects) {
			if(!this.entityContainsComponent(entityComponents, this.aspects[i])) {
				isValidEntity = false;
				break;
			}
		}

		if(isValidEntity) {

			for(var k in this.excludedAspects) {
				if(this.entityContainsComponent(entityComponents, this.excludedAspects[k])) {
					isValidEntity = false;
					break;
				}
			}

			if(isValidEntity) {
				this.entities.push(entities[i]);
			}
		}
	}

	return this;

};

EntityProcessingComponent.prototype.entityContainsComponent = function(entityComponents, component) {
	
	for(var i in entityComponents) {
		if(entityComponents[i].getTypeIdentifier() === component) {
			return true;
		}
	}

	return false;

};

EntityProcessingComponent.prototype.setEntities = function(entities) {
	
	this.entities = entities;
	return this;

};

EntityProcessingComponent.prototype.process = function() {
	
	for(var i in this.entities) {

		this.processEntity(this.entities[i]);

	}

	return this;

};

EntityProcessingComponent.prototype.processEntity = function(entity) {
	
	return this;

};