var world,
    entity,
    size;

/* ----------------------------------------- */

module('World',
                {
                  
                  setup: function () {

                    world = new World();
                    entity = new Entity();

                  },

                  teardown: function () {

                    delete world;
                    delete entity;

                  }

                }
);

/* ----------------------------------------- */

test( 'can have entities',
  function () {

    entity.addToWorld(world);
    ok( world.getEntities().length > 0, 'World has entities.' );
  
  }
);

/* ----------------------------------------- */

test( 'can provide Unique Identifier',
  function () {

    entity.addToWorld(world);
    equal( 1, world.getEntities()[0].getIdentifier(), 'World provides UIDs.' );
  
  }
);

/* ----------------------------------------- */

test( 'can remove entity',
  function () {

    entity.addToWorld(world);
    world.removeEntity(entity);
    ok( world.getEntities().length === 0, 'World removes entity.' );
  
  }
);

/* ----------------------------------------- */

test( 'can start',
  function () {

    world.start();
    ok( world.refreshLoop !== null, 'World starts.' );
  
  }
);

/* ----------------------------------------- */

test( 'can pause',
  function () {

    world.start();
    world.pause();
    ok( world.refreshLoop === null, 'World pauses.' );
  
  }
);

/* ----------------------------------------- */

test( 'can reset',
  function () {

    entity.addToWorld(world);
    world.start();
    world.reset();
    equal( world.getEntities().length, 0, 'World resets.' );
  
  }
);

/* ----------------------------------------- */

test( 'can process entity',
  function () {

    world.setSystem(new DeadEntitySystem());

    entity.addComponent(new DeadEntityComponent());
    entity.addToWorld(world);
    
    world.process();

    equal( world.getEntities().length, 0, 'World resets.' );
  
  }
);

/* ----------------------------------------- */