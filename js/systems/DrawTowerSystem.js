DrawTowerSystem.prototype = new EntityProcessingSystem();
DrawTowerSystem.prototype.constructor = DrawTowerSystem;

function DrawTowerSystem(canvas) {

    EntityProcessingSystem.call(this);
    this.TID = 'DrawTowerSystem';

    this.workOn(['DrawTowerComponent']);
    this.setCanvas(canvas);

};

DrawTowerSystem.prototype.setCanvas = function(canvas) {

    this.canvas = canvas;
    return this;

};

DrawTowerSystem.prototype.processEntity = function(entity) {

    if(this.canvas !== null && this.canvas !== undefined) {

        var positionComponent = entity.getComponent('PositionComponent');
        if(positionComponent !== null) {

            var position = positionComponent.getPosition();

            var context = this.canvas.getContext('2d');
            var drawTowerComponent = entity.getComponent('DrawTowerComponent');
            var color = '#FFFFFF';

            if(drawTowerComponent !== null) {

                color = drawTowerComponent.getColorAsString();

            }

            var width = Data.CELL_SIZE;
            var height = Data.CELL_SIZE;
            var sizeComponent = entity.getComponent('SizeComponent');
            if(sizeComponent !== null) {

                var size = sizeComponent.getSize();
                width = size.width;
                height = size.height;

            }

            context.fillStyle = color;
            context.fillRect(position.x, position.y, width, height);

        }

    }

    return this;

};