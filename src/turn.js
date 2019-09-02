class Turn {
	constructor(players) {
		this.players = players;
		this.currentPlayer = 0;
	}

	spinWheel(consonant) {
		// spin wheel on DOM, get wedge value
		if (wheel.wedge === 'BANKRUPT') {
			this.players[currentPlayer].currentScore = 0;
		} else if (wheel.wedge === 'LOSE A TURN') {
			this.endTurn();
		} else {
			this.players[currentPlayer].currentScore += wheel.wedge;
			this.guessConsonant(consonant);
		}
	}

	buyVowel(vowel) {
		this.players[currentPlayer].currentScore -= 100;
		if (puzzle.correctAnswer.includes(vowel)) {
			// display each correct vowel on DOM
		} else {
			this.endTurn();
		}
	}

	guessConsonant(consonant) {
		if (puzzle.correctAnswer.includes(consonant)) {
			// display each correct vowel on DOM
		} else {
			this.endTurn();
		}
	}

	solvePuzzle(guess) {
		if (guess === puzzle.correctAnswer) {
			players[currentPlayer].totalScore += currentScore;
			// end Round method
		} else {
			this.endTurn();
		}
	}

	endTurn() {
		this.currentPlayer++;
		if (this.currentPlayer === 3) {
			this.currentPlayer = 0;
		}
	}
}

if (typeof module !== 'undefined') {
	module.exports = Turn;
}