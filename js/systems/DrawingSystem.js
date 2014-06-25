DrawingSystem.prototype = new EntityProcessingSystem();
DrawingSystem.prototype.constructor = DrawingSystem;

function DrawingSystem() {

    EntityProcessingSystem.call(this);
	this.TID = 'DrawingSystem';

	this.workOn(['DrawComponent']);

};

DrawingSystem.prototype.processEntity = function(entity) {

    var positionComponent = entity.getComponent('SizeComponent');
    
    if(positionComponent !== null) {
        context.fillStyle = 'red';
        context.fillRect(positionComponent.x, positionComponent.y, 50, 50); // get tower size from ??
    }

};