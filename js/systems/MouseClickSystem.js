MouseClickSystem.prototype = new EntityProcessingSystem();
MouseClickSystem.prototype.constructor = MouseClickSystem;

function MouseClickSystem(world, canvas) {

    EntityProcessingSystem.call(this);
    this.TID = 'MouseClickSystem';

    this.workOn(['MouseClickComponent']);
    this.setWorld(world);
    this.setCanvas(canvas);

};

MouseClickSystem.prototype.setCanvas = function (canvas) {

    this.canvas = canvas;
    return this;

};

MouseClickSystem.prototype.setWorld = function (world) {

    this.world = world;
    return this;

};

MouseClickSystem.prototype.processEvent = function (event) {

    if(event.type === 'click') {

        var x = event.x;
        var y = event.y;

        x -= this.canvas.offsetLeft + (Data.CELL_SIZE / 2);
        y -= this.canvas.offsetTop + (Data.CELL_SIZE / 2);

        var position = this.getSnappedPositionAt(x, y);

        var tower = EntityFactory.createTower(position.x, position.y);
        tower.addToWorld(this.world);

        var bullet = EntityFactory.createBullet(new PositionComponent(x, y), new AimingComponent(new PositionComponent(0, 0)));
        bullet.addToWorld(this.world);

//        var self = this;
//        setInterval(
//
//            function () {
//
//                var bullet = EntityFactory.createBullet(new PositionComponent(x, y), new AimingComponent(new PositionComponent(0, 0)));
//                bullet.addToWorld(self.world);
//
//            }
//
//        , 1000);

    }

    return this;

};

MouseClickSystem.prototype.getSnappedPositionAt = function (positionX, positionY) {

    return {
        x: this.getColumnIndexAt(positionX),
        y: this.getRowIndexAt(positionY)
    };

};

MouseClickSystem.prototype.getColumnIndexAt = function (positionX) {

    return Math.round(positionX / Data.CELL_SIZE) * Data.CELL_SIZE;

};

MouseClickSystem.prototype.getRowIndexAt = function (positionY) {

    return Math.round(positionY / Data.CELL_SIZE) * Data.CELL_SIZE;

};