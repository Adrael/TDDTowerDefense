DrawSystem.prototype = new EntityProcessingSystem();
DrawSystem.prototype.constructor = DrawSystem;

function DrawSystem(canvas) {

    Component.call(this);
    this.TID = 'DrawSystem';

    this.workOn(['DrawComponent']);
    this.setCanvas(canvas);

};

DrawSystem.prototype.setCanvas = function(canvas) {

    this.canvas = canvas;
    return this;

};

DrawSystem.prototype.processEntity = function(entity) {

    if(this.canvas !== null && this.canvas !== undefined) {

        var positionComponent = entity.getComponent('PositionComponent');
        if(positionComponent !== null) {

            var position = positionComponent.getPosition();

            var context = this.canvas.getContext('2d');
            context.fillStyle = "#FF0000";
            context.fillRect(position.x, position.y, Data.CELL_SIZE, Data.CELL_SIZE);

        }

    }

    return this;

};