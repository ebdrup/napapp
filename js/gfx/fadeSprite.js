function fadeSprite(stage, sprite, t, cb) {
	if (sprite.tl) {
		sprite.tl.kill();
		delete sprite.tl;
	}
	sprite.tl = new TimelineMax({
		autoRemoveChildren: true,
		onComplete: function () {
			stage.removeChild(sprite);
			if (sprite.tl) {
				sprite.tl.kill();
				delete sprite.tl;
			}
			if (sprite.tl2) {
				sprite.tl2.kill();
				delete sprite.tl2;
			}
			cb && cb();
		}
	}).to(sprite, t, {ease: Power2.easeOut, alpha: 0});
	var scale = 2.5;
	sprite.tl2 = new TimelineMax({
		autoRemoveChildren: true
	}).to(sprite.scale, t, {ease: Power2.easeOut, x: scale, y: scale});
}
