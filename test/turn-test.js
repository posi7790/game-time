import chai from 'chai';
import Turn from '../src/turn.js';
import Player from '../src/player.js';
import data from '../src/data.js';
import Round from '../src/round.js';
import Game from '../src/game.js';
const expect = chai.expect;

describe('Turn', function () {
  let turn;
  let player;
  let round;
  let game;
  beforeEach(() => {
    game = new Game(data);
    round = new Round(data, game.puzzleBank)
    player = new Player('Bob');
    turn = new Turn(player, data.puzzles.one_word_answers.puzzle_bank[0], data.wheel);
  });

  it('should return true', () => {
    expect(true).to.equal(true);
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should have a player', () => {
    expect(turn.player.name).to.equal('Bob')
  });

  it('should be able to buy vowel', () => {
    turn.player.currentScore += 200;
    expect(turn.buyVowel('a')).to.equal(true);
    expect(turn.buyVowel('e')).to.equal(false);
  })

  it('should be able to guess consonant', () => {
    expect(turn.guessConsonant('m')).to.equal(true);
    expect(turn.guessConsonant('z')).to.equal(false);
  })

  it('should be able to solve the puzzle', () => {
    expect(turn.solvePuzzle('armchair')).to.equal(true);
    expect(turn.solvePuzzle('legchair')).to.equal(false);
  })
});