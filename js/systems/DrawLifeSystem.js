DrawLifeSystem.prototype = new EntityProcessingSystem();
DrawLifeSystem.prototype.constructor = DrawLifeSystem;

function DrawLifeSystem(canvas) {

    EntityProcessingSystem.call(this);
    this.TID = 'DrawLifeSystem';

    this.workOn(['LifeComponent']);
    this.setCanvas(canvas);

};

DrawLifeSystem.prototype.setCanvas = function(canvas) {

    this.canvas = canvas;
    return this;

};

DrawLifeSystem.prototype.processEntity = function(entity) {

    if(this.canvas !== null && this.canvas !== undefined) {

        var context = this.canvas.getContext('2d');

        var positionComponent = entity.getComponent('PositionComponent');
        var lifeComponent = entity.getComponent('LifeComponent');

        if(positionComponent !== null && lifeComponent !== null) {

            var lifePercentage = lifeComponent.getLife() / lifeComponent.getMaxLife();
            if(lifePercentage < 0) {

                lifePercentage = 0;

            }

            else if(lifePercentage > 1) {

                lifePercentage = 1;

            }

            var width = 150,
                height = 20,
                offsetY = -50,

                posX = positionComponent.getRealPositionX() - width / 2,
                posY = positionComponent.getRealPositionY();

            context.fillStyle = 'lightgray';
            context.fillRect(posX - 2, posY + offsetY, width + 4, height);

            context.fillStyle = 'red';
            context.fillRect(posX, posY + offsetY + 2, width, height - 4);

            if(lifePercentage > 0) {

                context.fillStyle = 'green';
                context.fillRect(posX, posY + offsetY + 2, width * lifePercentage, height - 4);

            }

        }

    }

    return this;

};