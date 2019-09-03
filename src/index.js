// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';
// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import './css/normalize.css';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

/* ------------------------------------- */
import Game from './game'
import Player from './player'
import data from './data'

// ** Event Listeners ** //
$('.button--start').click(() => {
  let players = [];
  players.push(
    new Player($('.input--player-1').val() || 'Player 1'),
    new Player($('.input--player-2').val() || 'Player 2'),
    new Player($('.input--player-3').val() || 'Player 3')
  )
  console.log(players)
  let game = new Game(players, data);
  game.generatePuzzleBank();

  // generate a new puzzlebank
  // start a new round
  // pick a puzzle
  // generate new wheel

  // remove current DOM page
  $('.gameplay').hide();
  $('.intro-page').fadeOut(2500);
  $('.gameplay').fadeIn(8000);


  // update DOM to gameplay (put puzzle, wheel, player name, player score)

});