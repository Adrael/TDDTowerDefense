ShootingSystem.prototype = new DelayedEntityProcessingSystem();
ShootingSystem.prototype.constructor = ShootingSystem;

function ShootingSystem(world) {

    DelayedEntityProcessingSystem.call(this);
    this.TID = 'ShootingSystem';

    this.workOn(['FiringRateComponent', 'AimingComponent']);

    this.setWorld(world);

};

ShootingSystem.prototype.setWorld = function (world) {

    this.world = world;
    return this;

};

ShootingSystem.prototype.getWorld = function () {

    return this.world;

};

ShootingSystem.prototype.getRemainingDelay = function (entity) {

    var firingRateComponent = entity.getComponent('FiringRateComponent');
    if(firingRateComponent !== null) {

        return firingRateComponent.getActualDelay();

    }

    return null;

};

ShootingSystem.prototype.processDelta = function (entity, delay) {

    var firingRateComponent = entity.getComponent('FiringRateComponent');
    if(firingRateComponent !== null) {

        var delta = firingRateComponent.getActualDelay() - delay;
        firingRateComponent.setActualDelay(delta);

    }

    return this;

};

ShootingSystem.prototype.processExpired = function (entity) {

    var positionComponent = entity.getComponent('PositionComponent');
    var aimingComponent = entity.getComponent('AimingComponent');
    var firingRateComponent = entity.getComponent('FiringRateComponent');
    if(positionComponent !== null && aimingComponent !== null && firingRateComponent !== null) {

        var bulletPositionComponent = new PositionComponent(positionComponent.getRealPositionX() + Data.CELL_SIZE / 2, positionComponent.getRealPositionY() + Data.CELL_SIZE / 2);

        var bullet = EntityFactory.createBullet(bulletPositionComponent, aimingComponent);
        bullet.addToWorld(this.world);

        var perception = bullet.getComponent('PerceptionComponent');
        var perceptionRadius = 100;
        if (perception !== null) {

            perceptionRadius = perception.getRadius();

        }

        var bulletPerception = EntityFactory.createPerception(bullet, perceptionRadius);
        bulletPerception.addToWorld(this.world);

        firingRateComponent.resetDelay();

    }
    return this;

};