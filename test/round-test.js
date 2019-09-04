import chai from 'chai';
import Game from '../src/game.js';
import Round from '../src/round.js';
import Player from '../src/player.js';
import data from '../src/data.js';
const expect = chai.expect;

describe('Round', () => {
  let player1, player2, player3;
  let players;
  let round;
  let game;
  beforeEach(() => {
    player1 = new Player('Sam');
    player2 = new Player('Eduardo');
    player3 = new Player('Pol');
    players = [player1, player2, player3]
    game = new Game(players, data);
    game.generatePuzzleBank();
    round = new Round(game);
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should get the current player', () => {
    expect(round.getCurrentPlayer()).to.eql(player1);
  });

  it('should randomize wheel', () => {
    round.randomizeWheel();
    expect(round.wheelData).to.not.equal(data.wheel);
    expect(round.wheelData.length).to.equal(data.wheel.length)
  });

  it('should choose random puzzle and remove it from puzzle bank', () => {
    round.choosePuzzle();
    expect(round.puzzleBank.length).to.equal(3);
    round.choosePuzzle();
    expect(round.puzzleBank.length).to.equal(2);
    round.choosePuzzle();
    expect(round.puzzleBank.length).to.equal(1);
    round.choosePuzzle();
    expect(round.puzzleBank.length).to.equal(0);
  });
});