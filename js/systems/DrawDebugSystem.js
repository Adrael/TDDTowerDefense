DrawDebugSystem.prototype = new EntityProcessingSystem();
DrawDebugSystem.prototype.constructor = DrawDebugSystem;

function DrawDebugSystem(canvas) {

    EntityProcessingSystem.call(this);
    this.TID = 'DrawDebugSystem';

    this.workOn(['DrawDebugComponent']);
    this.setCanvas(canvas);

};

DrawDebugSystem.prototype.setCanvas = function(canvas) {

    this.canvas = canvas;
    return this;

};

DrawDebugSystem.prototype.processEntity = function(entity) {

    if(this.canvas !== null && this.canvas !== undefined) {

        var positionComponent = entity.getComponent('PositionComponent');
        if(positionComponent !== null) {

            var position = positionComponent.getPosition();

            var context = this.canvas.getContext('2d');
            var drawFoeComponent = entity.getComponent('DrawDebugComponent');
            var color = '#FFFFFF';

            if(drawFoeComponent !== null) {

                color = drawFoeComponent.getColorAsString();

            }

            var radius = 10;
            var sizeComponent = entity.getComponent('SizeComponent');
            if(sizeComponent !== null) {

                var size = sizeComponent.getSize();
                radius = size.width;

            }

            context.fillStyle = '#FFFFFF';
            context.fillText(Math.round(position.x) + ', ' + Math.round(position.y), position.x, position.y + radius + 10);

            context.beginPath();
            context.arc(position.x, position.y, radius, 0, 2 * Math.PI, false);
            context.fillStyle = color;
            context.fill();
            context.lineWidth = 1;
            context.strokeStyle = '#003300';
            context.stroke();

        }

    }

    return this;

};