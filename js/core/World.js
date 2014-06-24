function World () {
	
	this.reset();

};

World.prototype.reset = function () {

	for(var i in this.entities) {
		this.entities[i].destroy();
	}

	this.systems = [];

	this.entities = [];
	this.entityCounter = 0;

	this.refreshLoop = null;
	this.FPS = 120;

	this.canvas = null;
	this.context = null;
	
	return this;

};

World.prototype.setSystem = function(system) {
	
	this.systems.push(system);
	return this;

};

World.prototype.setEntity = function (entity) {

	this.entities.push(entity);
	return this;

};

World.prototype.getEntities = function () {

	return this.entities;

};

World.prototype.removeEntity = function (entity) {

	var entityIndex = this.entities.indexOf(entity);
	
	if(entityIndex != -1) {
		this.entities.splice(entityIndex, 1);		
	}

	return this;

};

World.prototype.setFPS = function (fps) {

	this.FPS = fps;
	return this;

};

World.prototype.start = function () {

	if(this.refreshLoop) {
		clearInterval(this.refreshLoop);
	}

    var self = this;
	this.refreshLoop = setInterval(
		function () {

            self.process();

        }, 1000 / this.FPS);

	return this;

};

World.prototype.pause = function () {

	if(this.refreshLoop) {
		clearInterval(this.refreshLoop);
		this.refreshLoop = null;
	}

	return this;

};

World.prototype.restart = function () {

	this.start();
	return this;

};

World.prototype.process = function() {

	for(var i in this.systems) {

		this.systems[i].setEntities(this.entities);
		this.systems[i].process();

	}

	return this;

};

World.prototype.getUniqueIdentifier = function () {

	return ++this.entityCounter;

};