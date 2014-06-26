DrawMapSystem.prototype = new VoidEntitySystem();
DrawMapSystem.prototype.constructor = DrawMapSystem;

function DrawMapSystem(map, canvas) {

    VoidEntitySystem.call(this);
	this.TID = 'DrawMapSystem';

    this.setMap(map);
    this.setCanvas(canvas);

};

DrawMapSystem.prototype.setMap = function (map) {

    this.map = map;
    return this;

};

DrawMapSystem.prototype.setCanvas = function (canvas) {

    this.canvas = canvas;
    return this;

};

DrawMapSystem.prototype.process = function() {

    if(this.canvas !== null && this.canvas !== undefined) {

        var sizeComponent = this.map.getComponent('SizeComponent');
        if(sizeComponent !== null) {

            var size = sizeComponent.getSize();

            this.canvas.width  = size.width;
            this.canvas.height = size.height;

            this.canvas.style.marginLeft = '-' + size.width / 2 + 'px';
            this.canvas.style.marginTop = '-' + size.height / 2 + 'px';

            var context = this.canvas.getContext('2d');
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

    return this;
};