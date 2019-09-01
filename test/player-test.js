import chai from 'chai';
import Player from '../src/player.js';
const expect = chai.expect;

describe('Player', function() {
	let player;
	beforeEach(() => { 
		player = new Player('Bob');
	})
  it('should return true', function() {
    expect(true).to.equal(true);
  });
  it ('should be a function', function() {
  	expect(Player).to.be.a('function');
  })
  it('should have a name', function() {
  	expect(player.name).to.equal('Bob')
  })
});