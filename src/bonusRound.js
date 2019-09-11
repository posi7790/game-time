import $ from 'jquery';
import Round from './round';
import domUpdates from "./domUpdates";

class BonusRound extends Round {
	constructor(game) {
		super(game);
		this.bonusWheel = [];
		this.givenLetters = ['R','S','T','L','N','E'];
		this.counter = 0;
		this.bonusWedge = 0;
	}

	findWinner() {
		let sortedPlayers = this.players.sort((a,b) => {
			return b.gameScore - a.gameScore
		})
		return sortedPlayers[0];
	}

	createBonusWheel() {
		this.bonusWheel = this.wheelData.filter(wedge => {
			if (typeof wedge === 'number') {
				return wedge
			}
		})
		this.bonusWheel = this.bonusWheel.map(wedge => {
			return wedge * 5;
		})
	}

	displayGivenLetters() {
		this.givenLetters.forEach(letter => {
			if (this.game.bonusPuzzle.correct_answer.toUpperCase()
      .includes(letter.toUpperCase())) {
      	$(`*[data-letter="${letter}"]`).removeClass('hidden');
  		}
		})
	}

	guessBonusConsonant(consonant) {
    if (this.game.bonusPuzzle.correct_answer.toUpperCase()
      .includes(consonant.toUpperCase())) {
      $(`*[data-letter="${consonant}"]`).removeClass('hidden');
		}
	}

	guessBonusVowel(vowel) {
    if (this.game.bonusPuzzle.correct_answer.toUpperCase()
      .includes(vowel.toUpperCase())) {
      $(`*[data-letter="${vowel}"]`).removeClass('hidden');
		}
	}

	spinBonusWheel() {
		this.bonusWedge = `${this.bonusWheel[this.game
      .getRandomInteger(this.bonusWheel.length - 1)]}`;
    domUpdates.spinWheelOnDOM(this.bonusWedge);
    domUpdates.enableConsonants();
	}

	solveBonusPuzzle(guess) {
    if (guess.toUpperCase() === this.game.bonusPuzzle.correct_answer.toUpperCase()) {
      this.players[this.currentPlayer].updateGameScore(parseInt(this.bonusWedge));
      $(`.letter`).removeClass('hidden');
      return true;
    } else {
      return false;
    }
  }
}

export default BonusRound;