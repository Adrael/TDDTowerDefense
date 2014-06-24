DrawingMapComponent.prototype = new Component();
DrawingMapComponent.prototype.constructor = DrawingMapComponent;

function DrawingMapComponent(canvas, tileset) {

	Component.call(this);
	this.TID = 'DrawingMapComponent';

    this.setCanvas(canvas);
    this.setTileset(tileset);

    return this;

};

DrawingMapComponent.prototype.setCanvas = function (canvas) {

    this.canvas = canvas;
    return this;

};

DrawingMapComponent.prototype.getCanvas = function () {

    return this.canvas;

};

DrawingMapComponent.prototype.setTileset = function (tileset) {

    this.tileset = tileset;
    return this;

};

DrawingMapComponent.prototype.getTilset = function () {

    return this.tileset;

};