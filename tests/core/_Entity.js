var entity;

/* ----------------------------------------- */

module('Entity',
                {
                  
                  setup: function () {

                    entity = new Entity();

                  },

                  teardown: function () {

                    delete entity;

                  }

                }
);

/* ----------------------------------------- */

test( 'can take part of a World',
  function () {

    var world = new World();
    entity.addToWorld(world);
    deepEqual( world.getEntities()[0], entity, 'Entity takes part of a World.' );
  
  }
);

/* ----------------------------------------- */

test( 'can have a component',
  function () {

    entity.addComponent(new DeadEntityComponent());

    ok( entity.getComponents().length > 0 ,'Entity has component.' );
    ok( entity.getComponent('DeadEntityComponent') !== null ,'Entity retrieves component.' );
  
  }
);

/* ----------------------------------------- */

