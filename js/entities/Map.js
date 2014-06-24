Map.prototype = new Entity();
Map.prototype.constructor = Map;

function Map() {

	Entity.call(this);
	this.TID = 'map';

    this.width = this.height = 0;

    this.canvas = null;

    this.addComponent(new DrawingMapComponent());

};

Map.prototype.setContext = function (context) {

    this.context = context;
    return this;

};

Map.prototype.getContext = function () {

    return this.context;

};

Map.prototype.setCanvas = function (canvas) {

    this.canvas = canvas;
    this.context = canvas.getContext('2d');

    // canvas.addEventListener('mousedown', placeTower, false);

    // function placeTower(event)
    // {
    //     var x = event.x;
    //     var y = event.y;

    //     x -= canvas.offsetLeft - 25; // tower size/2
    //     y -= canvas.offsetTop - 25; // tower size/2

    //     console.log('placing tower at x: ' + x + ' y: ' + y);
    //     var tower = EntityFactory.createTower(x, y);
    // }

    return this;

};

Map.prototype.getCanvas = function() {
    
    return this.canvas;

};

Map.prototype.setSize = function (size) {

    this.width = size.width;
    this.height = size.height;

    return this;

};

Map.prototype.getSize = function () {

    return {width: this.width, height: this.height};

};