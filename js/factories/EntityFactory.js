var EntityFactory =
(
	function () {
		
		'use strict';

		return {

			createTower: function (x, y) {

				var tower = new Entity();
				tower.setTypeIdentifier('tower');
				tower.addComponent(new PositionComponent(x, y));
				tower.addComponent(new DrawingComponent());

				return tower;

			},

			createFoe: function () {

				var foe = new Entity();
				foe.setTypeIdentifier('foe');

				return foe;

			}

		};
	}
)();