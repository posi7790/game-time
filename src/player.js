class Player {
	constructor(name) {
		this.name = name;
		this.totalScore = 0;
		this.currentScore = 0;
	}
}

if (typeof module !== 'undefined') {
	module.exports = Player;
}