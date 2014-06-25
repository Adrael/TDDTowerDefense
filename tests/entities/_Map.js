var map;

/* ----------------------------------------- */

module('Map',
    {

        setup: function () {

            map = EntityFactory.createMap();

        },

        teardown: function () {

            delete map;

        }

    }
);

/* ----------------------------------------- */

test('must have a size', function () {

    var sizeComponent = map.getComponent('SizeComponent');
    var validSizeComponent = (sizeComponent !== null);

    ok(validSizeComponent, 'Map has a valid SizeComponent.');

    if(validSizeComponent) {
        var size = {
            width: 600,
            height: 600
        };

        var mapSize = sizeComponent.getSize();

        deepEqual(size, mapSize, 'Map does have a size.');
    }

});

/* ----------------------------------------- */