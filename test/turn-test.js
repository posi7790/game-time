import chai from 'chai';
import Turn from '../src/turn.js';
import Player from '../src/player.js';
import data from '../src/data.js';
import Round from '../src/round.js';
import Game from '../src/game.js';
const expect = chai.expect;

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

  it('should have a player', () => {
    expect(turn.player.name).to.equal('Sam')
  });

  it('should be able to buy vowel', () => {
    turn.player.currentScore += 200;
    expect(turn.buyVowel('a')).to.equal(true);
    expect(turn.buyVowel('e')).to.equal(false);
  });

  it('should be able to guess consonant', () => {
    expect(turn.guessConsonant('m')).to.equal(true);
    expect(turn.guessConsonant('z')).to.equal(false);
  });

  it('should be able to solve the puzzle', () => {
    expect(turn.solvePuzzle('armchair')).to.equal(true);
    expect(turn.solvePuzzle('legchair')).to.equal(false);
  });
});