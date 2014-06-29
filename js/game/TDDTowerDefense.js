var TDDTowerDefense =
(

    function () {

        'use strict';

        var world,
            map;

        return {

            /* ----------------------------------------- */

            initialize: function () {

                world = new TDDTowerDefenseWorld();

                var mapSize = {width: 800, height: 600};
                var canvas = document.getElementById('canvas');

                var clickEventListener =
                function (event) {

                    world.processEvent(world, event);

                };

                canvas.addEventListener('click', clickEventListener, false);

                map = EntityFactory.createMap(mapSize, canvas);

                world.setFPS(24);
                world.setSystem(new DrawMapSystem(map, canvas));

//                world.setSystem(new DrawDebugSystem(canvas));

                world.setSystem(new DrawFoeSystem(canvas));
                world.setSystem(new DrawBulletSystem(canvas));
                world.setSystem(new DrawTowerSystem(canvas));
                world.setSystem(new DrawLifeSystem(canvas));
                world.setSystem(new MouseClickSystem(world, canvas));
                world.setSystem(new TimeToLiveSystem());
                world.setSystem(new DeadEntitySystem());
                world.setSystem(new MovingSystem(world));
                world.setSystem(new SpawnFoeSystem(world, 3500));
                world.setSystem(new PerceptionSystem(world));

                world.setSystem(new ShootingSystem(world));

                return this;

            },

            /* ----------------------------------------- */

            play: function () {

                world.start();

                return this;

            },

            /* ----------------------------------------- */

            pause: function () {

                world.pause();

                return this;

            }

            /* ----------------------------------------- */

        };

    }

)();

TDDTowerDefense.initialize().play();