// class Wheel {
// 	constructor(wheelData) {
// 		this.wheelData = [...wheelData];
// 		this.randomizeWheel();
// 	}

// 	randomizeWheel() {
// 		let temporaryValue;
// 		let randomIndex;
// 		let currentIndex = this.wheelData.length;
//  		// While there remain elements to shuffle...
//  		while (0 !== currentIndex) {
//    	// Pick a remaining element...
//    		randomIndex = Math.floor(Math.random() * currentIndex);
//    		currentIndex -= 1;
//    		// And swap it with the current element.
//    		temporaryValue = this.wheelData[currentIndex];
//    		this.wheelData[currentIndex] = this.wheelData[randomIndex];
//    		this.wheelData[randomIndex] = temporaryValue;
//  		}
// 	}
// }

// if (typeof module !== 'undefined') {
// 	module.exports = Wheel;
// }