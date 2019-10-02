# GameTime: Wheel of Misfortune

GameTime is a recreation of the game Wheel of Fortune. The purpose of this project is to synthesize knowledge of OOP, classes, and JS fundamentals to create a playable game. A spooky, misfortunate theme was given to the game to give it a personal touch. Made for three players! Enjoy playing our game!

## Setup

### Clone Down and Run Locally

Fork and clone down repo.

Then install the library dependencies. Run:

```bash
npm install
```

In the terminal, run:

```bash
npm start
```

You will see a bunch of lines output to your terminal. One of those lines will be something like:

Project is running at http://localhost:8080/

Go to http://localhost:8080/ in your browser to view your code running in the browser.

### Run in GitHub Pages

Click this link: https://posi7790.github.io/game-time/

---

### Built with:

* HTML5
* CSS3
* SASS
* JavaScript
* Mocha/Chai
* JQuery
* Webpack
* Wheel of Fortune API

## Screenshots

<details>
  <summary>Start</summary>
    ![start-game](https://user-images.githubusercontent.com/25589695/66062822-a66f9700-e531-11e9-96d7-8ab6f72e0f7f.gif)    
</details>

<details>
  <summary>Game Play</summary>
    ![solve](https://user-images.githubusercontent.com/25589695/66062817-a2437980-e531-11e9-9da0-c128eababbd5.gif)
    ![vowel](https://user-images.githubusercontent.com/25589695/66062863-bb4c2a80-e531-11e9-984e-7002c2a89f64.gif)
</details>

## Gameplay

### Start Game

Enter players names and press start game. If no player names are entered, players will be assigned numbers i.e. player 1, player 2, and player 3.

### Player Turn

A player can:

1. Spin the wheel. Spin the wheel and guess a consonant to get the points. Avaliable consonants at the bottom of the webpage and player can click on their guess. If guessed correct, the player recieves points for every instance of guessed consonant and the puzzle will reveal guessed consonants, otherwise the player loses their turn. If wheel lands on bankrupt the player loses their points for the round and their turn. If the wheel lands on lose a turn, the player keep their money, but still loses the turn.

2. Buy a vowel. Can only be pressed if the player has at least 100 points to spend on buying a vowel. Avaliable vowels will display at the bottom of the webpage and player can click on their guess. If right, the guessed vowel will display on puzzle, otherwise the player loses their turn.

3. Solve the puzzle. Be careful! A wrong guess will result in the loss of your turn! Attempt to solve the puzzle to win the round!

### Reset Game

Will reset points, display a new puzzle, and reset the wheel!

### End Game

Resets game and takes you back to original start page to change player names.

## Authors

Sam Coleman

Eduardo Rodriguez

Pol Sieira
