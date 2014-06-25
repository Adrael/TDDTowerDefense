var EntityFactory =
(
	function () {
		
		'use strict';

		return {

            /* ----------------------------------------- */

            createTower: function (x, y) {

				var tower = new Entity();
				tower.setTypeIdentifier('Tower');
				tower.addComponent(new PositionComponent(x, y));
				tower.addComponent(new DrawComponent());

				return tower;

			},

            /* ----------------------------------------- */

            createFoe: function (x, y) {

				var foe = new Entity();
				foe.setTypeIdentifier('Foe');
                foe.addComponent(new PositionComponent(x, y));
                foe.addComponent(new DrawComponent());

				return foe;

			},

            /* ----------------------------------------- */

            createMap: function (size) {

                if(size === undefined) {

                    size = {
                        width: 600,
                        height: 600
                    };

                }

                var map = new Entity();
                map.setTypeIdentifier('Map');
                map.addComponent(new SizeComponent(size.width, size.height));
                map.addComponent(new MouseClickComponent());

                return map;

            }

            /* ----------------------------------------- */

        };
	}
)();