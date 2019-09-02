import chai from 'chai';
import Turn from '../src/turn.js';
import Player from '../src/player.js';
const expect = chai.expect;

describe('Turn', function() {
	let turn;
	let player1;
	let player2;
	let player3;
	beforeEach(() => {
		player1 = new Player('Bob');
		player2 = new Player('Tim'); 
		player3 = new Player('Jan');  
    turn = new Turn([player1, player2, player3]);
  });

  it('should return true', function() {
    expect(true).to.equal(true);
  });

  it ('should be a function', function() {
  	expect(Turn).to.be.a('function');
  });

  it('should have a player', function() {
  	expect(turn.players[0].name).to.equal('Bob')
  });
});