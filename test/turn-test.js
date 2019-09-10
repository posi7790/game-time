import $ from 'jquery';
import chai from 'chai';
import Turn from '../src/turn.js';
import Player from '../src/player.js';
import data from '../src/data.js';
import domUpdates from '../src/domUpdates.js';
import Round from '../src/round.js';
import Game from '../src/game.js';
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);
global.domUpdates = {};
chai.spy.on(domUpdates, ['enableConsonants', 'toggleButton', 'changeCurrentPlayer'], () => {});

describe('Turn', function () {
  let player1, player2, player3;
  let players;
  let turn;
  let round;
  let game;
  beforeEach(() => {
    player1 = new Player('Sam');
    player2 = new Player('Eduardo');
    player3 = new Player('Pol');
    players = [player1, player2, player3]
    game = new Game(players, data);
    game.generatePuzzleBank();
    round = new Round(game)
    turn = new Turn(round);
    turn.puzzle = data.puzzles.one_word_answers.puzzle_bank[0];
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  // it('should be able to spin wheel', () => {

  // })

  it('should be able to guess consonant', () => {
    turn.player.roundScore += 200;
    expect(turn.guessConsonant('m')).to.equal(true);
    turn.guessConsonant('r');
    expect(domUpdates.appendPlayerInfo).to.have.been.called.with([turn.player1]);
    expect(domUpdates.toggleButton).to.have.been.called(1);   
    expect(turn.guessConsonant('s')).to.equal(false);
  })

  it('should be able to buy vowel', () => {
    turn.player.roundScore += 200;
    turn.buyVowel('a');
    expect(domUpdates.appendPlayerInfo).to.have.been.called.with([turn.player1]);
    expect(turn.player.roundScore).to.equal(100);
  });

  it('should be able to solve the puzzle', () => {
    expect(turn.solvePuzzle('armchair')).to.equal(true);
    expect(turn.solvePuzzle('legchair')).to.equal(false);
  });

  it('should be able to end turn', () => {
    turn.endTurn();
    expect(domUpdates.toggleButton).to.have.been.called(2);
    expect(domUpdates.changeCurrentPlayer).to.have.been.called(2);
    expect(turn.round.currentPlayer).to.equal(1)
  })
});