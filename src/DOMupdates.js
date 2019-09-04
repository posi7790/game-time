import $ from 'jquery';

export default {

  fadeOutIntroPage() {
    $('.intro-page').fadeOut(2500);
    $('.gameplay').delay(2500).fadeIn(4000);
  },

  appendPlayerInfo(players) {
    players.forEach((player, index) => {
      $(`.player-name--${index + 1}`).text(player.name);
      $(`player-score--${index + 1}`).text(`Round Score: ${player.currentScore}`);
      $(`player-total-score--${index + 1}`).text(`Game Score: ${player.totalScore}`);
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

    $('.board').html(html);
  },


}