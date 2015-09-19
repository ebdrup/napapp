function getInteraction(state, world) {
	var gfx = new PIXI.Graphics();
	gfx.beginFill(0x000000);
	gfx.drawRect(0, 0, 1, 1);
	var sprite = new PIXI.Sprite(gfx.generateTexture());
	// center the sprite's anchor point
	sprite.width = world.renderer.view.width;
	sprite.height = world.renderer.view.height;
	sprite.interactive = true;
	sprite.on('mousedown', onDown);
	sprite.on('touchstart', onDown);
	var functions = Object.keys(state).map(function(key){
		return state[key];
	});
	var fIndex = Math.floor(Math.random() * functions.length);
	return sprite;

	function onDown() {
		var f;
		while(!f) {
			fIndex = (fIndex + 1) % functions.length;
			f = functions[fIndex];
		}
		f();
	}
}
