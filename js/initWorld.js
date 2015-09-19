function initWorld(state, world) {
	world.sounds = sfx();
	world.renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, {
		backgroundColor: 0x000000,
		antialias: true
	});
	document.body.appendChild(world.renderer.view);
	world.stage = new PIXI.Container();
	world.background = getInteraction(state, world);
	world.stage.addChild(world.background);
	window.onresize = function () {
		world.renderer.resize(window.innerWidth, window.innerHeight);
		world.background.width = world.renderer.view.width;
		world.background.height = world.renderer.view.height;
	};
}