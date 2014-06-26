VoidEntitySystem.prototype = new System();
VoidEntitySystem.prototype.constructor = VoidEntitySystem;

function VoidEntitySystem () {

    System.call(this);
    this.TID = 'VoidEntitySystem';

    return this;

}

VoidEntitySystem.prototype.process = function() {

    return this;

};