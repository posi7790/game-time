class Turn {
	constructor(player) {
		this.player = player;
	}

	spinWheel(consonant) {
		// spin wheel on DOM, get wedge value
		if (wheel.wedge === 'BANKRUPT') {
			this.player.currentScore = 0;
		} else if (wheel.wedge === 'LOSE A TURN') {
			this.endTurn();
		} else {
			this.player.currentScore += wheel.wedge;
			this.guessConsonant(consonant);
		}
	}

	buyVowel(vowel) {
		if (this.player.currentScore >= 100) {
			this.player.currentScore -= 100;
			if (puzzle.correctAnswer.toUpperCase().includes(vowel.toUpperCase())) {
				// display each correct vowel on DOM
			} else {
				this.endTurn();
			}
		}
	}

	guessConsonant(consonant) {
		if (puzzle.correctAnswer.toUpperCase().includes(consonant.toUpperCase())) {
			// display each correct vowel on DOM
		} else {
			this.endTurn();
		}
	}

	solvePuzzle(guess) {
		if (guess.toUpperCase() === puzzle.correctAnswer.toUpperCase()) {
			player.totalScore += currentScore;
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