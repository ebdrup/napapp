function sfx() {
	var s = {
		aBitTired: new Howl({
			urls: ['abittired.mp3'],
			volume: 0.3
		}),
		anAppForThat: new Howl({
			urls: ['anapforthat.mp3'],
			volume: 0.3
		}),
		napTime: new Howl({
			urls: ['naptime.mp3'],
			volume: 0.3
		}),
		sorryBoss: new Howl({
			urls: ['sorryboss.mp3'],
			volume: 0.3
		})
	};
	return Object.keys(s).reduce(function (acc, key) {
		var sound = s[key];
		acc[key] = function (volume) {
			if (volume) {
				sound._volume = volume;
			}
			sound.play();
		};
		return acc;
	}, {});
}