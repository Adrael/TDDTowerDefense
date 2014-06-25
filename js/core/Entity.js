function Entity () {

	this.TID = 'Entity';

    this.world = null;
    this.UID = null;

    this.components = [];

};

Entity.prototype.addToWorld = function (world) {

	this.world = world;
	this.setIdentifier(this.world.getUniqueIdentifier());
    this.world.setEntity(this);

	return this;

};

Entity.prototype.getWorld = function() {
	
	return this.world;
	
};

Entity.prototype.setIdentifier = function (UID) {

	this.UID = UID;
	return this;

};

Entity.prototype.getIdentifier = function () {

	return this.UID;

};

Entity.prototype.setTypeIdentifier = function (TID) {

	this.TID = TID;
	return this;

};

Entity.prototype.getTypeIdentifier = function () {

	return this.TID;

};

Entity.prototype.destroy = function () {
	
	return this;

};

Entity.prototype.addComponent = function(component) {

	this.components.push(component);

};

Entity.prototype.getComponents = function() {
	
	return this.components;

};

Entity.prototype.getComponent = function(component) {
	for(var i in this.components) {

		if(this.components[i].getTypeIdentifier() === component) {

			return this.components[i];

		}

	}

	return null;
};

Entity.prototype.removeComponent = function (component) {

    for(var i = 0; i < this.components.length; ++i) {

        if(this.components[i].getTypeIdentifier() === component) {

            this.components.slice(i, 1);
            break;

        }

    }

    return this;

};