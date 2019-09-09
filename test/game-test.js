import chai from 'chai';
import Game from '../src/game.js';
import Player from '../src/player.js';
import data from '../src/data.js';
import domUpdates from '../src/domUpdates.js';
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);
global.domUpdates = {};
chai.spy.on(domUpdates, ['resetLetters', 'appendPlayerInfo'], () => {});

describe('Game', function () {
  let player1, player2, player3;
  let players;
  let game;
  beforeEach(() => {
    player1 = new Player('Sam');
    player2 = new Player('Eduardo');
    player3 = new Player('Pol');
    players = [player1, player2, player3]
    game = new Game(players, data);
  });

  it('should be a function', function () {
    expect(Game).to.be.a('function');
  });

  it('should generate a random integer for index', () => {
    expect(game.getRandomInteger(24) % 1).to.equal(0);
    expect(game.getRandomInteger(24)).to.be.within(0, 24)
  });

  it('should generate a random puzzle bank', () => {
    game.generatePuzzleBank();
    expect(game.puzzleBank.length).to.equal(4);
  })

  it('should generate a random bonus puzzle', () => {
    game.generateBonusPuzzle();
    expect(game.bonusPuzzle).to.be.an('object');
  });

  it('should be able to end the current round', () => {
    game.endRound();
    expect(game.currentRound).to.equal(2);
    expect(domUpdates.resetLetters).to.have.been.called(1);
    expect(domUpdates.appendPlayerInfo).to.have.been.called.with(game.players);
    expect(player1.roundScore).to.equal(0);
  });
});