import $ from 'jquery';

export default {

  displayPuzzle(puzzle) {
    let html = '';

    let words = puzzle.correct_answer.toUpperCase().split(' ');
    words.forEach(word => {
      html += `<div class="word">`
      let characters = word.split('');
      characters.forEach(character => {
        if (character === '-' || character === '\'' || character === '&') {
          html += `<span class="character symbol">${character}</span>`
        } else {
          html += `<span class="character letter hidden">${character}</span>`
        }
      });
      html += `</div>`
    })

    $('.board').html(html);
  }

}