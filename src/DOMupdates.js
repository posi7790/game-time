import $ from 'jquery';

export default {

  fadeInQuitPage() {
    $('.gameplay').fadeOut(2500);
    $('.quit-screen').delay(2500).fadeIn(4000);
  },

  appendPlayerQuit(player) {
    $().text(`${player.name} has died`)
  },

  fadeOutIntroPage() {
    $('.intro-page').fadeOut(2500);
    $('.gameplay').delay(2500).fadeIn(4000);
  },

  fadeInIntroPage() {
    $('.quit-screen').fadeOut(2500);
    $('.intro-page').delay(2500).fadeIn(4000);
  },

  fadeOutQuitPage() {
    $('.quit-screen').fadeOut(2500);
    $('.gameplay').delay(2500).fadeIn(4000);
  },

  appendPlayerInfo(players) {
    players.forEach((player) => {
      $(`.player-name--${player.id}`).text(player.name);
      $(`.player-score--${player.id}`).text(`Round Score: ${player.roundScore}`);
      $(`.player-total-score--${player.id}`).text(`Game Score: ${player.gameScore}`);
    })
  },

  displayPuzzle(puzzle) {
    let html = '';

    let words = puzzle.correct_answer.toUpperCase().split(' ');
    words.forEach(word => {
      html += `<div class="word">`
      let characters = word.split('');
      characters.forEach(character => {
        if (character === '-' || character === '&') {
          html += `</div><div class="word"><span class="character symbol">${character}</span></div><div class="word">`;
        } else if (character === '\'') {
          html += `<span class="character symbol">${character}</span>`;
        } else {
          html += `<span class="character letter hidden" data-letter="${character}">${character}</span>`;
        }
      });
      html += `</div>`
    })

    $('.category').text(puzzle.category)
    $('.board').html(html);
  },

  displayWheel(wheelData) {
    let html = ``;
    wheelData.forEach(wedge => {
      if (wedge === 'BANKRUPT' || wedge === 'LOSE A TURN') {
        html += `<div class="wedge death-wedge">${wedge}</div>`;
      } else {
        html += `<div class="wedge number-wedge">${wedge}</div>`;
      }
    });
    $('.wheel').html(html);
  },

  displayRound(round) {
    $('.round').text(`Round: ${round}`);
  },

  displayScore(player, roundScore, gameScore) {
    $(`.player-score--${player}`)
      .text(`Round Score: ${roundScore}`);
    $(`.player-total-score--${player}`)
      .text(`Game Score: ${gameScore}`);
  },

  displaySolveModal() {
    $('.solve-puzzle').css('display', 'block');
    $('.gameplay').css('opacity', 0.2);
  },

  hideSolveModal() {
    $('.solve-puzzle').hide();
    $('.input--solve-puzzle').val('').css('color', 'white');
    $('.gameplay').css('opacity', 1);
  },

  spinWheelOnDOM(currentWedge) {
    let wedges = Array.from($('.wedge'))
    wedges.forEach(wedge => {
      if (wedge.innerText === currentWedge) {
        wedge.scrollIntoView();
      }
    });
  },

  changeCurrentPlayer(player) {
    $(`.player${player}-info`).toggleClass('current-player');
  },

  enableVowels() {
    $('.vowel').addClass('ready-to-pick');
    $('.button--vowel').removeAttr('disabled');
  },

  disableVowels(vowel) {
    $('.vowel').removeClass('ready-to-pick');
    $(vowel).addClass('picked');
  },

  enableConsonants() {
    $('.consonant').addClass('ready-to-pick');
  },

  disableConsonant(consonant) {
    $('.consonant').removeClass('ready-to-pick');
    $(consonant).addClass('picked');
  },

  resetLetters() {
    $('.consonant').removeClass('picked');
    $('.vowel').removeClass('picked');
  },

  toggleButton(button, toggle) {
    button.attr("disabled", toggle);
  }

}