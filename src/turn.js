import $ from 'jquery';

class Turn {
  constructor(round) {
    this.round = round;
    this.player = round.getCurrentPlayer();
    this.puzzle = round.currentPuzzle;
    this.wheel = round.wheelData;
    this.wedge = null;
  }

  spinWheel() {
    // spin wheel on DOM, get wedge value
    $('.button--spin').attr("disabled", true);
    this.wedge = `${this.wheel[this.round.game
      .getRandomInteger(this.wheel.length - 1)]}`;
    console.log(this.wedge)
    let wedges = Array.from($('.wedge'))
    wedges.forEach(wedge => {
      if (wedge.innerText === this.wedge) {
        wedge.scrollIntoView();
      }
    });
    if (this.wedge === 'BANKRUPT') {
      this.player.zeroCurrentScore();
    } else if (this.wedge === 'LOSE A TURN') {
      this.endTurn();
    } else {
      // enable consonants
      $('.consonant').css("pointer-events", "auto")
      // disable everything else
      // prompt user to pick a consonant
    }
  }

  guessConsonant(consonant) {
    $('.consonant').css("pointer-events", "none")
    $('.button--spin').removeAttr("disabled")
    if (this.puzzle.correct_answer.toUpperCase()
      .includes(consonant.toUpperCase())) {
      $(`*[data-letter="${consonant}"]`).removeClass('hidden');
      let numberOfInstances =
        this.puzzle.correct_answer.toUpperCase().split('').filter(letter => {
          return letter === consonant
        }).length;
      this.player.updateCurrentScore(this.wedge * numberOfInstances);
      $(`.player-score--${this.player.id}`)
        .text(`Round Score: ${this.player.currentScore}`);
      console.log(true)
      return true;
    } else {
      this.endTurn();
      console.log(false)
      return false;
    }
  }

  buyVowel(vowel) {
    if (this.player.currentScore >= 100) {
      this.player.updateCurrentScore(-100);
      if (this.puzzle.correct_answer.toUpperCase()
        .includes(vowel.toUpperCase())) {
        // display each correct vowel on DOM
        return true;
      } else {
        this.endTurn();
        return false;
      }
    }
  }

  solvePuzzle(guess) {
    if (guess.toUpperCase() === this.puzzle.correct_answer.toUpperCase()) {
      this.player.updateTotalScore(this.player.currentScore);
      // end Round method
      return true;
    } else {
      this.endTurn();
      return false;
    }
  }

  quitGame() {

  }

  endTurn() {
    this.round.currentPlayer++;
    if (this.round.currentPlayer === 3) {
      this.round.currentPlayer = 0;
    }
  }
}

export default Turn;