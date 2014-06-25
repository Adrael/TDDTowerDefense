var TDDTowerDefense =
(

    function () {

        'use strict';

        var world,
            map;

        return {

            /* ----------------------------------------- */

            initialize: function () {

                world = new World();

                var mapSize = {width: 800, height: 600};
                var canvas = document.getElementById('canvas');

                var clickEventListener =
                function (event) {

                    world.processEvent(world, event);

                };

                //canvas.addEventListener('click', world.processEvent, false);
                canvas.addEventListener('click', clickEventListener, false);

                map = EntityFactory.createMap(mapSize, canvas);
                //map.addToWorld(world);

                world.setFPS(24);
                world.setSystem(new DrawMapSystem(map, canvas));
                world.setSystem(new DrawSystem(canvas));
                world.setSystem(new MouseClickSystem(world, canvas));

                return this;

            },

            /* ----------------------------------------- */

            launch: function () {

                world.start();

                return this;

            }

            /* ----------------------------------------- */

        };

    }

)();

TDDTowerDefense.initialize().launch();