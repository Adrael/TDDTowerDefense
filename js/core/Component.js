function Component () {

	this.TID = 'Component';

}

Component.prototype.setTypeIdentifier = function(TID) {
	
	this.TID = TID;

};

Component.prototype.getTypeIdentifier = function(first_argument) {
	
	return this.TID;
	
};