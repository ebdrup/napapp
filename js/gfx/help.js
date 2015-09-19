var colors = [0x5856d6, 0xff2d55, 0x4cd964, 0x007aff, 0xff3b30, 0x5ac8fa, 0xffcc00, 0x34aadc];//0x8e8e93
var colorIndex = Math.floor(Math.random() * colors.length);

function help(world, str, t, cb) {
	var color;
	while(!color) {
		colorIndex = (colorIndex + 1) % colors.length;
		color = colors[colorIndex];
	}
	var fontSize = Math.max(Math.ceil(world.renderer.view.width * 2 / (str.length*1.5)), 20);
	var style = {
		font: 'bold ' + fontSize + 'px Impact, Futura-CondensedExtraBold, DroidSans, Charcoal, sans-serif',
		fill: '#' + ('000000' + parseInt(color, 10).toString(16)).slice(-6)
	};
	var text = new PIXI.Text(str, style);
	text.anchor.x = 0.5;
	text.anchor.y = 0.5;
	var h = text.height + 100;
	text.x = Math.round(world.renderer.view.width / 2);
	text.y = Math.round(h / 2 + (world.renderer.view.height - h) * Math.random());
	world.stage.addChild(text);
	fadeSprite(world.stage, text, t, cb);
}
