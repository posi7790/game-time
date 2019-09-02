class Game {
	constructor(data) {
		this.puzzleData = data.puzzles;
		this.puzzleBank = [];
		this.bonusPuzzle = {};
	}

	generatePuzzleBank() {
		let keys = Object.keys(this.puzzleData);
		keys.forEach(key => {
			let puzzleByWordLength = this.puzzleData[key].puzzle_bank;
			let puzzle = puzzleByWordLength[this.getRandomInteger(puzzleByWordLength.length - 1)];
			this.puzzleBank.push(puzzle);
		})
	}

	getRandomInteger(max) {
		return Math.floor(Math.random() * Math.floor(max))
	}

	generateBonusPuzzle() {
		let combinedPuzzleBank = [...this.puzzleData.one_word_answers.puzzle_bank, ...this.puzzleData.two_word_answers.puzzle_bank, ...this.puzzleData.three_word_answers.puzzle_bank, ...this.puzzleData.four_word_answers.puzzle_bank]
		this.bonusPuzzle = combinedPuzzleBank[this.getRandomInteger(combinedPuzzleBank.length - 1)]
	}
}

if (typeof module !== 'undefined') {
	module.exports = Game;
}