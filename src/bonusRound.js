import Round from './round';

class BonusRound extends Round {
	constructor(game) {
		super(game);
	}

	findWinner() {
		let sortedPlayers = this.players.sort((a,b) => {
			b.gameScore - a.gameScore
		})
		return sortedPlayers[0];
	}

	
}

export default BonusRound;