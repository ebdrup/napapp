function napapp() {
	var world = {};
	function anApp(cb) {
		world.sounds.anAppForThat();
		help(world, 'Feeling tired?', 1, function () {
			setTimeout(function () {
				help(world, 'There\'s a\'nap for that', 3, cb);
			}, 500);
		});
	}
	function aBitTired(cb) {
		world.sounds.aBitTired();
		help(world, 'I\'m a bit tired', 1, function () {
			setTimeout(function () {
				help(world, 'I\'m gonna take a nap now', 4, cb);
			}, 0);
		});
	}
	function napTime(cb) {
		world.sounds.napTime();
		help(world, 'Nap time!', 3, cb);
	}

	function sorryBoss(cb) {
		world.sounds.sorryBoss();
		help(world, 'Sorry boss', 0.8, function () {
			setTimeout(function () {
				help(world, 'I can\'t do than', 1, function(){
					help(world, 'I need a nap now', 6, cb);
				});
			}, 0);
		});
	}
	var state = {
		anApp:anApp,
		aBitTired:aBitTired,
		napTime:napTime,
		sorryBoss:sorryBoss

	};
	initWorld(state, world);

	setTimeout(function(){
		anApp(function(){
			help(world, 'turn on sound!', 6);
		});
	}, 1000);
	// start animating
	animate();
	function animate() {
		requestAnimationFrame(animate);
		// render the container
		world.renderer.render(world.stage);
	}
}