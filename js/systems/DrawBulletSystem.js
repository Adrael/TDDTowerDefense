DrawBulletSystem.prototype = new EntityProcessingSystem();
DrawBulletSystem.prototype.constructor = DrawBulletSystem;

function DrawBulletSystem(canvas) {

    EntityProcessingSystem.call(this);
    this.TID = 'DrawBulletSystem';

    this.workOn(['DrawBulletComponent']);
    this.setCanvas(canvas);

};

DrawBulletSystem.prototype.setCanvas = function(canvas) {

    this.canvas = canvas;
    return this;

};

DrawBulletSystem.prototype.processEntity = function(entity) {

    if(this.canvas !== null && this.canvas !== undefined) {

        var positionComponent = entity.getComponent('PositionComponent');
        if(positionComponent !== null) {

            var position = positionComponent.getPosition();

            var context = this.canvas.getContext('2d');
            var drawBulletComponent = entity.getComponent('DrawBulletComponent');
            var color = '#FFFFFF';

            if(drawBulletComponent !== null) {

                color = drawBulletComponent.getColorAsString();

            }

            var radius = 10;
            var sizeComponent = entity.getComponent('SizeComponent');
            if(sizeComponent !== null) {

                var size = sizeComponent.getSize();
                radius = size.width;

            }

            context.beginPath();
            context.arc(position.x, position.y, radius, 0, 2 * Math.PI, false);
            context.fillStyle = color;
            context.fill();
            context.lineWidth = 5;
            context.strokeStyle = '#003300';
            context.stroke();

        }

    }

    return this;

};