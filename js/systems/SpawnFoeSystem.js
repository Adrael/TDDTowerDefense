SpawnFoeSystem.prototype = new VoidEntitySystem();
SpawnFoeSystem.prototype.constructor = SpawnFoeSystem;

function SpawnFoeSystem(world, spawningDelay) {

    VoidEntitySystem.call(this);
    this.TID = 'SpawnFoeSystem';

    this.setWorld(world);
    this.setDelay(spawningDelay);

    this.currentDelay = spawningDelay;

};

SpawnFoeSystem.prototype.process = function() {

    this.currentDelay -= this.world.getDelta();
    if(this.currentDelay <= 0) {

        var foe = EntityFactory.createFoe(new PositionComponent(0, 0), new AimingComponent(new PositionComponent(600, 600)));
        foe.addToWorld(this.world);
        this.world.addFoe(foe);

        var perception = foe.getComponent('PerceptionComponent');
        var perceptionRadius = 100;
        if (perception !== null) {

            perceptionRadius = perception.getRadius();

        }

        var foePerception = EntityFactory.createPerception(foe, perceptionRadius);
        foePerception.addToWorld(this.world);

        this.currentDelay = this.delay;

    }

    return this;

};

SpawnFoeSystem.prototype.setDelay = function (delay) {

    this.delay = delay;
    return this;

};

SpawnFoeSystem.prototype.getDelay = function () {

    return this.delay;

};

SpawnFoeSystem.prototype.setWorld = function (world) {

    this.world = world;
    return this;

};

SpawnFoeSystem.prototype.getWorld = function () {

    return this.world;

};