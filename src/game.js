class Game {
  constructor(data) {
    this.puzzleData = data.puzzles;
    this.puzzleBank = [];
    this.bonusPuzzle = {};
    this.currentRound = 0;
  }

  getRandomInteger(max) {
    return Math.floor(Math.random() * Math.floor(max))
  }

  generatePuzzleBank() {
    let keys = Object.keys(this.puzzleData);
    keys.forEach(key => {
      let puzzleByWordLength = this.puzzleData[key].puzzle_bank;
      let puzzleIndex = this.getRandomInteger(puzzleByWordLength.length - 1);
      let puzzle = puzzleByWordLength[puzzleIndex];
      this.puzzleBank.push(puzzle);
    })
  }

  generateBonusPuzzle() {
    let combinedPuzzleBank = [...this.puzzleData.one_word_answers.puzzle_bank, ...this.puzzleData.two_word_answers.puzzle_bank, ...this.puzzleData.three_word_answers.puzzle_bank, ...this.puzzleData.four_word_answers.puzzle_bank]
    let puzzleIndex = this.getRandomInteger(combinedPuzzleBank.length - 1);
    this.bonusPuzzle = combinedPuzzleBank[puzzleIndex];
  }

  endRound() {
    this.currentRound++;
    if (this.currentRound === 3) {
      // end game or start bonus round
    }
  }
}

export default Game;