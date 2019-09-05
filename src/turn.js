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
    this.wedge = `${this.wheel[this.round.game
      .getRandomInteger(this.wheel.length - 1)]}`;
    let wedges = Array.from($('.wedge'))
    wedges.forEach(wedge => {
      if (wedge.innerText === this.wedge) {
        wedge.scrollIntoView();
      }
    });
    if (this.wedge === 'BANKRUPT') {
      this.player.zeroRoundScore();
      $(`.player-score--${this.player.id}`)
        .text(`Round Score: ${this.player.roundScore}`);
      this.endTurn();
    } else if (this.wedge === 'LOSE A TURN') {
      this.endTurn();
    } else {
      $('.consonant').addClass('ready-to-pick');
    }
  }

  guessConsonant(consonant) {
    if (this.puzzle.correct_answer.toUpperCase()
      .includes(consonant.toUpperCase())) {
      $(`*[data-letter="${consonant}"]`).removeClass('hidden');
      let numberOfInstances =
        this.puzzle.correct_answer.toUpperCase().split('').filter(letter => {
          return letter === consonant
        }).length;
      this.player.updateRoundScore(this.wedge * numberOfInstances);
      $(`.player-score--${this.player.id}`)
        .text(`Round Score: ${this.player.roundScore}`);
      console.log(true)
      if (this.player.roundScore >= 100) {
        $('.button--vowel').attr("disabled", false);
      }
      return true;
    } else {
      this.endTurn();
      console.log(false)
      return false;
    }
  }

  buyVowel(vowel) {
    if (this.player.roundScore >= 100) {
      this.player.updateRoundScore(-100);
      $(`.player-score--${this.player.id}`)
        .text(`Round Score: ${this.player.roundScore}`);
      if (this.puzzle.correct_answer.toUpperCase()
        .includes(vowel.toUpperCase())) {
        $(`*[data-letter="${vowel}"]`).removeClass('hidden');
        console.log(true, vowel);
      } else {
        this.endTurn();
        console.log(false, vowel);
      }
    }
  }

  solvePuzzle(guess) {
    if (guess.toUpperCase() === this.puzzle.correct_answer.toUpperCase()) {
      this.player.updateGameScore(this.player.roundScore);
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
    console.log('End Turn')
    $('.button--spin').removeAttr("disabled");
    this.round.currentPlayer++;
    if (this.round.currentPlayer === 3) {
      this.round.currentPlayer = 0;
    }
    this.player = this.round.getCurrentPlayer();
    if (this.player.roundScore >= 100) {
      $('.button--vowel').attr("disabled", false);
    }
  }
}

export default Turn;