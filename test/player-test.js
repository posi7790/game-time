import chai from 'chai';
import Player from '../src/player.js';
const expect = chai.expect;

describe('Player', function () {
  let player;
  beforeEach(() => {
    player = new Player('Bob');
  });

  it('should be a function', () => {
    expect(Player).to.be.a('function');
  });

  it('should have a name', () => {
    expect(player.name).to.equal('Bob')
  });
});