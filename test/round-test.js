import chai from 'chai';
import Round from '../src/round.js';
import Game from '../src/game.js';
import data from '../src/data.js';
const expect = chai.expect;

describe('Round', function() {
	let round;
  let game;
	beforeEach(() => { 
    game = new Game(data);
    game.generatePuzzleBank();
    round = new Round(data, game.puzzleBank);
  });

  it ('should be a function', function() {
  	expect(Round).to.be.a('function');
  });

  it ('should randomize wheel', function() {
    round.randomizeWheel();
  	expect(round.wheelData).to.not.equal(data.wheel);
  });

  it ('should choose random puzzle and remove it from puzzle bank', function() {
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