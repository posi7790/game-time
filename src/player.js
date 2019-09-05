class Player {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.gameScore = 0;
    this.roundScore = 0;
  }

  updateRoundScore(score) {
    this.roundScore += score;
  }

  updateGameScore(score) {
    this.gameScore += score;
  }

  zeroRoundScore() {
    this.roundScore = 0;
  }
}

export default Player;