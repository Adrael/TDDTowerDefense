DrawingMapSystem.prototype = new EntityProcessingComponent();
DrawingMapSystem.prototype.constructor = DrawingMapSystem;

function DrawingMapSystem() {

	Component.call(this);
	this.TID = 'DrawingMapSystem';

	this.workOn(['DrawingMapComponent']);

};

DrawingMapSystem.prototype.processEntity = function(entity) {

    console.log('Drawing Map');

    var drawingMapComponent = entity.getComponent('DrawingMapComponent');
    if(drawingMapComponent !== null) {
        var canvas = drawingMapComponent.getCanvas();

        if(canvas !== null) {

            var sizeComponent = entity.getComponent('SizeComponent');
            if(sizeComponent !== null) {

                var size = sizeComponent.getSize();

                canvas.width  = size.width;
                canvas.height = size.height;

                canvas.style.marginLeft = '-' + size.width / 2 + 'px';
                canvas.style.marginTop = '-' + size.height / 2 + 'px';

                var context = canvas.getContext('2d');
                context.strokeStyle = '#ffffff';

                // vertical lines
                for(var i = 0; i < size.width - ((3/4) * (size.width - size.height)); i += Data.CELL_SIZE) {

                    context.beginPath();
                    context.moveTo(i, 0);
                    context.lineTo(i, size.width);
                    context.stroke();

                }

                // horizontal lines
                for(var i = 0; i < size.height; i += Data.CELL_SIZE) {

                    context.beginPath();
                    context.moveTo(0, i);
                    context.lineTo(size.height, i);
                    context.stroke();

                }

            }

        }

    }

};