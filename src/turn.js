class Turn {
  constructor(round) {
    this.round = round;
    this.player = round.getCurrentPlayer();
    round.choosePuzzle();
    this.puzzle = round.currentPuzzle[0];
    this.wheel = round.wheelData;
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
      if (this.puzzle.correct_answer.toUpperCase().includes(vowel.toUpperCase())) {
        return true;
        // display each correct vowel on DOM
      } else {
        this.endTurn();
        return false;
      }
    }
  }

  guessConsonant(consonant) {
    if (this.puzzle.correct_answer.toUpperCase().includes(consonant.toUpperCase())) {
      return true;
      // display each correct vowel on DOM
    } else {
      this.endTurn();
      return false;
    }
  }

  solvePuzzle(guess) {
    if (guess.toUpperCase() === this.puzzle.correct_answer.toUpperCase()) {
      this.player.totalScore += this.player.currentScore;
      return true;
      // end Round method
    } else {
      this.endTurn();
      return false;
    }
  }

  endTurn() {
    this.round.currentPlayer++;
    if (this.round.currentPlayer === 3) {
      this.round.currentPlayer = 0;
    }
  }
}

export default Turn;