module('EntityFactory');

/* ----------------------------------------- */

test('can create a foe', function () {

	ok(EntityFactory.createFoe(new PositionComponent(0, 0), new AimingComponent(new PositionComponent(0, 0))) !== null, 'EntityFactory creates foes.');

});

/* ----------------------------------------- */

test('can create a tower', function () {

    ok(EntityFactory.createTower() !== null, 'EntityFactory creates towers.');

});

/* ----------------------------------------- */

test('can create a map', function () {

    ok(EntityFactory.createMap() !== null, 'EntityFactory creates maps.');

});

/* ----------------------------------------- */

test('can create a perception', function () {

    ok(EntityFactory.createPerception(new Entity(), 0) !== null, 'EntityFactory creates perceptions.');

});

/* ----------------------------------------- */