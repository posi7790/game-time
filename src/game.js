import domUpdates from "./domUpdates";

class Game {
  constructor(players, data) {
    this.players = players;
    this.wheelData = [...data.wheel];
    this.puzzleData = data.puzzles;
    this.puzzleBank = [];
    this.bonusPuzzle = {};
    this.currentRound = 1;
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
    let combinedPuzzleBank = this.puzzleData.one_word_answers.puzzle_bank
      .concat(this.puzzleData.two_word_answers.puzzle_bank, this.puzzleData.three_word_answers.puzzle_bank, this.puzzleData.four_word_answers.puzzle_bank);
    let puzzleIndex = this.getRandomInteger(combinedPuzzleBank.length - 1);
    this.bonusPuzzle = combinedPuzzleBank[puzzleIndex];
  }

  endRound() {
    this.currentRound++
    domUpdates.resetLetters();
    this.players.forEach(player => {
      player.zeroRoundScore();
    })
    domUpdates.appendPlayerInfo(this.players);
    if (this.currentRound === 4) {
      // let bonusRound = new BonusRound(player, bonusPuzzle, bonusWheel)
    }
    if (this.currentRound > 4) {
      // end game - winner message with prize image (add bonus prize to total score)
    }
  }
}

export default Game;