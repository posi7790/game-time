import chai from 'chai';
import Player from '../src/player.js';
const expect = chai.expect;

describe('Player', function () {
  let player;
  beforeEach(() => {
    player = new Player(1, 'Bob');
  });

  it('should be a function', () => {
    expect(Player).to.be.a('function');
  });

  it('should have a name', () => {
    expect(player.name).to.equal('Bob')
  });

  it('should have an id', () => {
    expect(player.id).to.equal(1)
  });

  it('should be able to update round score', () => {
    expect(player.roundScore).to.equal(0)
    player.updateRoundScore(500)
    expect(player.roundScore).to.equal(500)
  });

  it('should be able to update game score', () => {
    expect(player.gameScore).to.equal(0)
    player.updateGameScore(1000)
    expect(player.gameScore).to.equal(1000)
  });

  it('should be able to reset round score to zero', () => {
    player.updateRoundScore(500)
    expect(player.roundScore).to.equal(500)
    player.zeroRoundScore()
    expect(player.roundScore).to.equal(0)
  });
});