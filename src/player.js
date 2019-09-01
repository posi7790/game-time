class Player {
	constructor(name) {
		this.name = name;
		this.currentScore = 0;
		this.totalScore = 0;
	}
}

if (typeof module !== 'undefined') {
	module.exports = Player;
}