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
				tower.addComponent(new DrawTowerComponent(255, 255, 0, 1));
                tower.addComponent(new SizeComponent(Data.CELL_SIZE, Data.CELL_SIZE));
                tower.addComponent(new FiringRateComponent(600));
                tower.addComponent(new PerceptionComponent(100));

                return tower;

			},

            /* ----------------------------------------- */

            createPerception: function (entity, radius) {

                var perception = new Entity();
                perception.setTypeIdentifier('Perception');
                perception.addComponent(new DrawFoeComponent(244, 164, 96, 0.1));
                perception.addComponent(new SizeComponent(radius, radius));
                perception.addComponent(new ReferrerComponent(entity));

                var entityTimeToLiveComponent = entity.getComponent('TimeToLiveComponent');
                if(entityTimeToLiveComponent !== null) {

                    perception.addComponent(new TimeToLiveComponent(entityTimeToLiveComponent.getTimeToLive()));

                }

                var entitySpeedComponent = entity.getComponent('SpeedComponent');
                if(entitySpeedComponent !== null) {

                    perception.addComponent(new SpeedComponent(entitySpeedComponent.getSpeed()));

                }

                var entityVelocityComponent = entity.getComponent('VelocityComponent');
                if(entityVelocityComponent !== null) {

                    perception.addComponent(new VelocityComponent(entityVelocityComponent.getX(), entityVelocityComponent.getY()));

                }

                var positionComponent = null;
                var entityPositionComponent = entity.getComponent('PositionComponent');
                if(entityPositionComponent !== null && entityTimeToLiveComponent !== null && entitySpeedComponent !== null && entityVelocityComponent !== null) {

                    positionComponent = new PositionComponent(entityPositionComponent.getX(), entityPositionComponent.getY());
                    positionComponent.setOrigin(entityPositionComponent);

                    perception.addComponent(positionComponent);

                } else {

                    var entitySizeComponent = entity.getComponent('SizeComponent');
                    if (entityPositionComponent !== null && entitySizeComponent !== null) {

                        var size = entitySizeComponent.getSize();
                        positionComponent = new PositionComponent(entityPositionComponent.getX() + (size.width / 2), entityPositionComponent.getY() + (size.height / 2));
                        perception.addComponent(positionComponent);

                    }

                }

                if(positionComponent !== null) {

                    perception.addComponent(new CircleCollisionComponent(positionComponent, radius));

                }

                return perception;

            },

            /* ----------------------------------------- */

            createFoe: function (position, aiming) {

				var foe = new Entity();
				foe.setTypeIdentifier('Foe');
                foe.addComponent(new SizeComponent(Data.CELL_SIZE / 2, Data.CELL_SIZE / 2));
                foe.addComponent(new DrawFoeComponent(0, 128, 128, 1));
                foe.addComponent(new PerceptionComponent(50));

                var positionComponent = new PositionComponent(position.getX(), position.getY());
                positionComponent.setOrigin(position);

                foe.addComponent(positionComponent);
                foe.addComponent(new SpeedComponent(100));
//                foe.addComponent(new TimeToLiveComponent(3000));
                foe.addComponent(new VelocityComponent(positionComponent, aiming.getPosition()));

				return foe;

			},

            /* ----------------------------------------- */

//            public static Entity createBullet(World world, PositionComponent position, AimingComponent aiming) {
//
//                bullet.addComponent(new CircleCollisionComponent(positionComponent, 5f));
//                bullet.addComponent(new DrawingSpriteComponent(KingdomWarData.getInstance().getSprite(Constants.Textures.BULLET), positionComponent, 10, 10));
//
//                return bullet;
//            }

            createBullet: function (position, aiming) {

                var bullet = new Entity();
                bullet.setTypeIdentifier('Bullet');

                var positionComponent = new PositionComponent(position.getX(), position.getY());
                positionComponent.setOrigin(position);

                bullet.addComponent(positionComponent);
                bullet.addComponent(new DrawBulletComponent(255, 0, 0, 1));
                bullet.addComponent(new SizeComponent(Data.CELL_SIZE / 10, Data.CELL_SIZE / 10));

//                bullet.addComponent(new BulletPowerComponent(10));
                bullet.addComponent(new SpeedComponent(750));
                bullet.addComponent(new TimeToLiveComponent(2000));
                bullet.addComponent(new VelocityComponent(positionComponent, aiming.getPosition()));

                return bullet;

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