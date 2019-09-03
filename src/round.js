class Round {
  constructor(data, puzzleBank) {
    this.wheelData = [...data.wheel];
    this.puzzleBank = puzzleBank;
    this.currentRound = 0;
    this.currentPlayer = 0;
    this.currentPuzzle = {};
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

  endRound() {
    this.currentRound++;
    if (this.currentRound === 3) {
      // end game or start bonus round
    }
  }

  choosePuzzle() {
    let randomPuzzleIndex = this.getRandomInteger(this.puzzleBank.length - 1);
    this.currentPuzzle = this.puzzleBank.splice(randomPuzzleIndex, 1);
  }

  getRandomInteger(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}

export default Round;