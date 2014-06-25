EntityProcessingSystem.prototype = new System();
EntityProcessingSystem.prototype.constructor = EntityProcessingSystem;

function EntityProcessingSystem () {

    System.call(this);
	this.TID = 'EntityProcessingSystem';

	return this;

}