function Game () {

	var world = new World();
	world.setSize({ width: 600, height: 600 });
	world.setCanvas(document.getElementById('canvas'));

	// world.setFPS(1);
	world.start();

};