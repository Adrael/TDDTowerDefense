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
                world.setFPS(1);
                world.setSystem(new DrawingMapSystem());

                var mapSize = {width: 800, height: 600};
                var canvas = document.getElementById('canvas');
                map = EntityFactory.createMap(mapSize, canvas);
                map.addToWorld(world);

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