module('EntityFactory');

/* ----------------------------------------- */

test('can create a foe', function () {

	ok(EntityFactory.createFoe() !== null, 'EntityFactory creates foes.');

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