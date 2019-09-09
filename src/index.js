// Imports
import $ from 'jquery';
import './css/base.scss';
import './css/normalize.css';
import Game from './game';
import Player from './player';
import data from './data';
import domUpdates from './domUpdates';
import Round from './round';
import Turn from './turn';

// Event Listeners
let game, round, turn, players;

fetch('https://fe-apps.herokuapp.com/api/v1/gametime/1903/wheel-of-fortune/data')
  .then(data => data.json())
  .then(data => getData(data))
  .catch(err => console.log(err))

function getData(data) {
  return data
}

$('.button--start').click(() => {
  let parsedData = getData(data)
  startNewGame(parsedData)
});

function startNewGame(parsedData) {
  // console.log("pd", parsedData)

  players = instantiatePlayers();
  // make new game
  game = new Game(players, parsedData);
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
  // update DOM
  domUpdates.fadeOutIntroPage();
  domUpdates.appendPlayerInfo(players);
  domUpdates.displayPuzzle(round.currentPuzzle);
  domUpdates.displayWheel(round.wheelData);
  domUpdates.displayRound(game.currentRound)
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

$('.button--solve').click(() => {
  domUpdates.toggleButton($('.button--solve-puzzle'), false);
  domUpdates.displaySolveModal();
});

$('.button--solve-puzzle').click(() => {
  domUpdates.toggleButton($('.button--solve-puzzle'), true);
  let guess = $('.input--solve-puzzle').val();
  let isCorrect = turn.solvePuzzle(guess);
  if (isCorrect) {
    $('.input--solve-puzzle').val('You live for now');
    domUpdates.displayRound(game.currentRound)
    // pick a puzzle
    round.choosePuzzle();
    // generate new wheel
    round.randomizeWheel();
    domUpdates.displayPuzzle(round.currentPuzzle);
    domUpdates.displayWheel(round.wheelData);
    turn = new Turn(round);
  } else {
    $('.input--solve-puzzle').val('Better luck next time').css('color', 'red');
  }
  setTimeout(function () {
    domUpdates.hideSolveModal();
  }, 3000);
});

$('.button--vowel').click(() => {
  domUpdates.toggleButton($('.button--spin'), true);
  domUpdates.toggleButton($('.button--solve'), true);
  domUpdates.enableVowels();
});

$('.vowel').click((event) => {
  turn.buyVowel(event.target.innerText);
  domUpdates.disableVowels(event.target);
  domUpdates.toggleButton($('.button--solve'), false);
  domUpdates.toggleButton($('.button--spin'), false);
});

$('.button--spin').click(() => {
  domUpdates.toggleButton($('.button--vowel'), true);
  domUpdates.toggleButton($('.button--solve'), true);
  domUpdates.toggleButton($('.button--spin'), true);
  turn.spinWheel();
});

$('.consonant').click((event) => {
  turn.guessConsonant(event.target.innerText);
  domUpdates.disableConsonant(event.target);
  domUpdates.toggleButton($('.button--spin'), false);
  domUpdates.toggleButton($('.button--solve'), false);
});

$('.button--reset').click(() => {
  resetGame();
});

function resetGame() {
  domUpdates.changeCurrentPlayer(round.getCurrentPlayer().id);
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
  // start new turn
  turn = new Turn(round);

  // update DOM
  domUpdates.changeCurrentPlayer(round.getCurrentPlayer().id);
  domUpdates.appendPlayerInfo(players);
  domUpdates.displayPuzzle(round.currentPuzzle);
  domUpdates.displayWheel(round.wheelData);
  domUpdates.displayRound(game.currentRound);
  domUpdates.resetLetters();
}

$('.button--quit').click(() => {
  quitGame();
});

function quitGame() {
  domUpdates.fadeInQuitPage();
}

$('.button--new-game').click(() => {
  resetGame();
  domUpdates.fadeInIntroPage();
});

$('.button--go-back').click(() => {
  domUpdates.fadeOutQuitPage();
});