class Round {
  constructor(game) {
    this.game = game;
    this.players = game.players;
    this.wheelData = game.wheelData;
    this.puzzleBank = game.puzzleBank;
    this.currentPuzzle = {};
    this.currentPlayer = 0;
  }

  getCurrentPlayer() {
    return this.players[this.currentPlayer];
  }

  randomizeWheel() {
    let temporaryValue;
    let randomIndex;
    let currentIndex = this.wheelData.length;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = this.wheelData[currentIndex];
      this.wheelData[currentIndex] = this.wheelData[randomIndex];
      this.wheelData[randomIndex] = temporaryValue;
    }
  }

  choosePuzzle() {
    let randomPuzzleIndex = this.game.getRandomInteger(this.puzzleBank.length - 1);
    this.currentPuzzle = this.puzzleBank.splice(randomPuzzleIndex, 1)[0];
  }
}

export default Round;