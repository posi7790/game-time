import chai from 'chai';
import Game from '../src/game.js';
import data from '../src/data.js';
const expect = chai.expect;

describe('Game', function () {
  let game;
  beforeEach(() => {
    game = new Game(data);
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
});