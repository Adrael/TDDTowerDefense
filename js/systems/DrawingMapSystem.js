DrawingMapSystem.prototype = new EntityProcessingComponent();
DrawingMapSystem.prototype.constructor = DrawingMapSystem;

function DrawingMapSystem() {

	Component.call(this);
	this.TID = 'DrawingMapSystem';

	this.workOn(['DrawingMapComponent']);

};

DrawingMapSystem.prototype.processEntity = function(entity) {

    var canvas = entity.getCanvas();

    if(canvas) {

        var size = entity.getSize();

        canvas.width  = this.width;
        canvas.height = this.height;

        canvas.style.marginLeft = '-' + this.width / 2 + 'px';
        canvas.style.marginTop = '-' + this.height / 2 + 'px';
        
    }

	// get size, cell et context du world
	
	for(var i = 0; i < size; i += cell) {

        // vertical lines
        context.beginPath();
        context.moveTo(i, 0);
        context.lineTo(i, size);
        context.stroke();

        // horizontal lines
        context.beginPath();
        context.moveTo(0, i);
        context.lineTo(size, i);
        context.stroke();

    }

};