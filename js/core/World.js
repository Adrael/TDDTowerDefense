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

    this.delta = 0;
    this.deltaDate = null;

    this.started = false;
	
	return this;

};

World.prototype.isStarted = function () {

    return this.started;

};

World.prototype.setSystem = function(system) {
	
	this.systems.push(system);
	return this;

};

World.prototype.setEntity = function (entity) {

	this.entities.push(entity);
	return this;

};

World.prototype.getEntitiesWithComponent = function (component) {

    var entitiesWithComponent = [];
    for(var i in this.entities) {

        if(this.entities[i].getComponent(component)) {

            entitiesWithComponent.push(this.entities[i]);

        }

    }

    return entitiesWithComponent;

};

World.prototype.getEntitiesWithComponents = function (components) {

    var entitiesWithComponents = [],
        isValid = true;
    for(var i in this.entities) {

        isValid = true;
        for(var j in components) {

            if(this.entities[i].getComponent(components[j]) === null) {

                isValid = false;
                break;

            }

        }

        if(isValid) {

            entitiesWithComponents.push(this.entities[i]);

        }

    }

    return entitiesWithComponents;

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

    this.started = true;

	if(this.refreshLoop) {
		clearInterval(this.refreshLoop);
	}

    var self = this;
	this.refreshLoop = setInterval(
		function () {

            self.process();

        },
    1000 / this.FPS);

    this.deltaDate = new Date();

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

World.prototype.getDelta = function () {

    return this.delta;

};

World.prototype.process = function () {

    if(this.started) {

        var newDeltaDate = new Date();
        this.delta = Math.abs(newDeltaDate.getTime() - this.deltaDate.getTime());
        this.deltaDate = newDeltaDate;

    }

	for(var i in this.systems) {

        if(this.systems[i] instanceof DelayedEntityProcessingSystem) {

            this.systems[i].processDelayedBefore(this.entities, this.delta);

        }

        else if(this.systems[i] instanceof VoidEntitySystem) {

            this.systems[i].process();

        }

        else {

            this.systems[i].processEntities(this.entities);

        }

	}

	return this;

};

World.prototype.processEvent = function (world, event) {

    for(var i in this.systems) {

        if(this.systems[i] instanceof VoidEntitySystem) {

            this.systems[i].processEvent(event);
            continue;

        }

        this.systems[i].processEventEntities(this.entities, event);

    }

    return this;

};

World.prototype.getUniqueIdentifier = function () {

    return ++this.entityCounter;

};