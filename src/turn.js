import $ from 'jquery';
import domUpdates from './domUpdates';

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
    domUpdates.spinWheelOnDOM(this.wedge);
    // Give wheel half a second to spin
    setTimeout(() => {
      if (this.wedge === 'BANKRUPT') {
        this.player.zeroRoundScore();
        domUpdates.appendPlayerInfo([this.player]);
        this.endTurn();
      } else if (this.wedge === 'LOSE A TURN') {
        this.endTurn();
      } else {
        domUpdates.enableConsonants();
      }
    }, 500);
  }

  guessConsonant(consonant) {
    if (this.puzzle.correct_answer.toUpperCase()
      .includes(consonant.toUpperCase())) {
      $(`*[data-letter="${consonant}"]`).removeClass('hidden');
      let numberOfInstances =
        this.puzzle.correct_answer.toUpperCase().split('').filter(letter => {
          return letter === consonant;
        }).length;
      this.player.updateRoundScore(this.wedge * numberOfInstances);
      domUpdates.appendPlayerInfo([this.player]);
      if (this.player.roundScore >= 100) {
        domUpdates.toggleButton($('.button--vowel'), false);
      }
      return true;
    } else {
      this.endTurn();
      return false;
    }
  }

  buyVowel(vowel) {
    if (this.player.roundScore >= 100) {
      this.player.updateRoundScore(-100);
      domUpdates.appendPlayerInfo([this.player]);
      if (this.puzzle.correct_answer.toUpperCase()
        .includes(vowel.toUpperCase())) {
        $(`*[data-letter="${vowel}"]`).removeClass('hidden');
      } else {
        this.endTurn();
      }
    }
  }

  solvePuzzle(guess) {
    console.log(this.currentPuzzle)
    if (guess.toUpperCase() === this.puzzle.correct_answer.toUpperCase()) {
      this.player.updateGameScore(this.player.roundScore);
      $(`.letter`).removeClass('hidden');
      this.round.game.endRound();
      return true;
    } else {
      this.endTurn();
      return false;
    }
  }

  endTurn() {
    domUpdates.toggleButton($('.button--spin'), false);
    domUpdates.changeCurrentPlayer(this.player.id);
    this.round.currentPlayer++;
    if (this.round.currentPlayer === 3) {
      this.round.currentPlayer = 0;
    }
    this.player = this.round.getCurrentPlayer();
    if (this.player.roundScore >= 100) {
      domUpdates.toggleButton($('.button--vowel'), false);

    } else {
      domUpdates.toggleButton($('.button--vowel'), true);

    }
    domUpdates.changeCurrentPlayer(this.player.id);
  }
}

export default Turn;