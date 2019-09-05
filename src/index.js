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
import domUpdates from './domUpdates'
import Round from './round';
import Turn from './turn';

// ** Event Listeners ** //
let game, round, turn, players;


$('.button--start').click(() => {
  startNewGame()
});

function startNewGame() {
  players = instantiatePlayers();
  // make new game
  game = new Game(players, data);
  // generate a new puzzlebank  
  game.generatePuzzleBank();
  // start a new round
  round = new Round(game);
  // pick a puzzle
  round.choosePuzzle();
  // generate new wheel
  round.randomizeWheel();
  // start first players turn
  turn = new Turn(round);

  domUpdates.fadeOutIntroPage();
  domUpdates.appendPlayerInfo(players);
  domUpdates.displayPuzzle(round.currentPuzzle);
  domUpdates.displayWheel(round.wheelData);
}

function instantiatePlayers() {
  let players = [];
  players.push(
    new Player(1, $('.input--player-1').val() || 'Player 1'),
    new Player(2, $('.input--player-2').val() || 'Player 2'),
    new Player(3, $('.input--player-3').val() || 'Player 3')
  )
  return players;
}

$('.button--vowel').click(() => {

});
$('.button--spin').click(() => {
  turn.spinWheel();
});

$('.consonant').click((event) => {
  turn.guessConsonant(event.target.innerText);
});

$('.button--reset').click(() => {
  resetGame();
});

function resetGame() {
  let players = instantiatePlayers();
  // make new game
  let game = new Game(players, data);
  // generate a new puzzlebank  
  game.generatePuzzleBank();
  // start a new round
  let round = new Round(game);
  // pick a puzzle
  round.choosePuzzle();
  // generate new wheel
  round.randomizeWheel();

  domUpdates.appendPlayerInfo(players);

  domUpdates.displayPuzzle(round.currentPuzzle);
  domUpdates.displayWheel(round.wheelData);
}

$('.button--quit').click(() => {
  quitGame();
});

function quitGame() {
  domUpdates.fadeInQuitPage();
}

$('.button--new-game').click(() => {
  domUpdates.fadeInIntroPage();
});

$('.button--go-back').click(() => {
  domUpdates.fadeOutQuitPage();
});