var system;

/* ----------------------------------------- */

module('System',
    {

        setup: function () {

            system = new System();

        },

        teardown: function () {

            delete system;

        }

    }
);

/* ----------------------------------------- */

test( 'can receive an entity',
    function () {

        system.workOn(['PositionComponent']);

        var entity = new Entity();
        entity.addComponent(new PositionComponent(0, 0));

        var world = new World();
        world.setSystem(system);
        entity.addToWorld(world);

        world.process();

        equal( system.getEntities().length, 1, 'System receives an entity.' );

    }
);

/* ----------------------------------------- */

