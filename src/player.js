class Player {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.totalScore = 0;
    this.currentScore = 0;
  }

  updateCurrentScore(score) {
    this.currentScore += score;
  }

  updateTotalScore(score) {
    this.totalScore += score;
  }

  zeroCurrentScore() {
    this.currentScore = 0;
  }
}

export default Player;