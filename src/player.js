class Player {
	construtor(name) {
		this.name = name;
		this.currentScore = currentScore || 0;
		this.totalScore = totalScore || 0;
	}
}

if (typeof module !== 'undefined') {
	module.exports = Player;
}