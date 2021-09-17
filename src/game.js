const readline = require("readline");

const Player = require('./Player.js');
const Bot = require('./Bot')
const displayArt = require('./display.js');

const gameModesEnum = require('./enum/gameModes.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});



let botPlayFirst;
let playerRound;
let gameChoice;
let playerOne;
let playerTwo;
let firstLine;
let secondLine;
let thirdLine;

/**
 * Set all the necessary variables to her initial state
 */
const setup = () => {
    firstLine = [' ', ' ', ' '];
    secondLine = [' ', ' ', ' '];
    thirdLine = [' ', ' ', ' '];
};


/**
 * Changes players turn
 */
const changeTurn = () => {
    if(gameChoice === gameModesEnum.SINGLE_PLAYER){
        playerOne.switchPlayer();
        botPlayer.switchPlayer();
        
    } else {
        
        playerOne.switchPlayer();
        playerTwo.switchPlayer();
    }
};

/**
 * Define the current player to the playeRound global variable
 */
const currentPlayer = () => {
    if(gameChoice === gameModesEnum.SINGLE_PLAYER) {
        if (playerOne && playerOne.getPlayerTurn()) {
            playerRound = playerOne;
        }

        if (botPlayer && botPlayer.getPlayerTurn()) {
            playerRound = botPlayer;
        }
    } else {
        if (playerOne && playerOne.getPlayerTurn()) {
            playerRound = playerOne;
        }

        if (playerTwo && playerTwo.getPlayerTurn()) {
            playerRound = playerTwo;
        }
    }
};

/**
 * Gives the winner his points and congratulates him
 */
const declaretWinner = () => {
    if (playerOne.getPlayerTurn() || playerTwo && playerTwo.getPlayerTurn()) {
        playerRound.win();
        winnerMessage(playerRound)
    } else {
        botPlayer.win();
        loseToBot();
    }
};

/**
 * Ask to the player if he wants play the same game mode again
 */
const rematch = () => {
    rl.question("Wanna play again? (yes/no): ", function (answer) {
        switch (answer) {
            case "yes":

            if (gameChoice === gameModesEnum.MULTIPLAYER) {
                console.clear()
                conectionMessage()
                multiplayer(true);
            }

            if (gameChoice === gameModesEnum.SINGLE_PLAYER) {
                console.clear()
                conectionMessage()
                singlePlayer(true);
            }

        break;
        case "no":
            if (gameChoice === gameModesEnum.MULTIPLAYER) {
                
                showOverhallWinnerMulti(playerOne, playerTwo);
                menu();
            }

            if(gameChoice === gameModesEnum.SINGLE_PLAYER){

                showOverhallWinnerSingle(playerOne, botPlayer)
                menu();
            }
        break;
        default:
            console.log(`${answer} it's not a valid option, please say 'yes' or 'no'`);
            rematch();
        }
    });
}



/**
 * Check if someone wins. If don't, then the player turn changes and the game goes on
 */
const checkWinner = () => {
    const weapon = playerRound.getWeapon();

    if (firstLine[0] === weapon && firstLine[1] === weapon && firstLine[2] === weapon) {
       
        declaretWinner();
        rematch();
    } else if (secondLine[0] === weapon && secondLine[1] === weapon && secondLine[2] === weapon) {
        
        declaretWinner();
        rematch();
    } else if (thirdLine[0] === weapon && thirdLine[1] === weapon && thirdLine[2] === weapon) {
        
        declaretWinner();
        rematch();
    } else if (firstLine[0] === weapon && secondLine[0] === weapon && thirdLine[0] === weapon) {
        
        declaretWinner();
        rematch();
    } else if (firstLine[1] === weapon && secondLine[1] === weapon && thirdLine[1] === weapon) {
        
        declaretWinner();
        rematch();
    } else if (firstLine[2] === weapon && secondLine[2] === weapon && thirdLine[2] === weapon) {
        
        declaretWinner();
        rematch();
    } else if (firstLine[0] === weapon && secondLine[1] === weapon && thirdLine[2] === weapon) {
        
        declaretWinner();
        rematch();
    } else if (firstLine[2] === weapon && secondLine[1] === weapon && thirdLine[0] === weapon) {
        
        declaretWinner();
        rematch();
    } else if (!firstLine.includes(" ") && !secondLine.includes(" ") && !thirdLine.includes(" ")) {

        console.log("So close! The game has empate");

        playerOne.draw();

        if (playerTwo) {
            playerTwo.draw();
        }

        rematch();
    } else {
        changeTurn();
        currentPlayer()
        game();
    }
};

/**
 * Show the current status of the game
 */
const consequenceMove = () => {
    console.clear(); 
    displayTable(firstLine, secondLine, thirdLine);
    checkWinner();
};

/**
 * Get the player moviments
 */
const game = () => {
    if (playerRound === botPlayer){
        botPlayer.botMove(firstLine, secondLine, thirdLine)
        consequenceMove();

    } else {
        rl.question(`Please, choose the line (a, b or c): `, function (letter) {
            rl.question(`Now choose the column (1, 2 or 3): `, function (numb) {
              const parsedNumber = Number(numb) - 1;
              const parsedLetter = letter.toLowerCase();

              if (!parsedLetter.match(/^(a|b|c)$/) || !numb.match(/^(1|2|3)$/)) {
                console.clear();
                console.log("Choose a valid letter or number");

                game();
              } else {
                if (parsedLetter === 'a') {
                  if (firstLine[parsedNumber] !== ' ') {

                    showNotEmpty()
                    game();
                  } else {

                    firstLine[parsedNumber] = playerRound.getWeapon();
                    consequenceMove();
                  }
                } else if (parsedLetter === 'b') {
                  if (secondLine[parsedNumber] !== ' ') {
                
                    showNotEmpty()
                    game();
                  } else {

                    secondLine[parsedNumber] = playerRound.getWeapon();
                    consequenceMove();
                  }
                } else if (parsedLetter === 'c') {
                  if (thirdLine[parsedNumber] !== ' ') {

                    showNotEmpty()
                    game();
                  } else {
                    thirdLine[parsedNumber] = playerRound.getWeapon();
                    consequenceMove();
                  }
                }
              }
            });
        });
    };
};

/**
 * Starts a multiplayer game
 * @param {boolean} rematch Defaults false. If true, then a new game initiate but using the
 * current defined players
 */
const multiplayer = (rematch = false) => {
    if (!rematch) {
        rl.question("what's your name player 1? ", (namePlayerOne) => {
            rl.question("what's your name player 2? ", (namePlayerTwo) => {
                playerOne = new Player(namePlayerOne, 'X', true);
                playerTwo = new Player(namePlayerTwo, 'O');
                botPlayer = new Bot('bot', 'O');
                setup();
                displayTable(firstLine, secondLine, thirdLine);
                currentPlayer()
                game();
            });
        });
    } else {
        playerOne.setPlayerTurn(true);
        playerTwo.setPlayerTurn(false);
        setup();
        displayTable(firstLine, secondLine, thirdLine);
        currentPlayer()
        game();
    }
};

/**
 * Starts a single player game against the bot
 * @param {boolean} rematch Defaults false. If true, then a new game initiate but using the
 * current defined players
 */
const singlePlayer = (rematch = false) => {

    if (!rematch) {
        rl.question('Do you want let the bot make the first move? (yes/no)', (firstMove) => {
            if(firstMove !== 'yes' && firstMove !== 'no'){
                console.clear();
                console.log('Choose a valid option');
                singlePlayer();
            } else {
                botPlayFirst = firstMove;
                rl.question("what's your name player 1? ", (namePlayerOne) => {
                    const botPlaysFirst = firstMove === 'yes' ? true : false;
                    playerOne = new Player(namePlayerOne, 'X', !botPlaysFirst);
                    botPlayer = new Bot('bot', 'O', botPlaysFirst);
                    setup();
                    displayTable(firstLine, secondLine, thirdLine);
                    currentPlayer();
                    game();    
                });
            }                 
        });
        
    } else {
        if (botPlayFirst === 'yes'){
            playerOne.setPlayerTurn(false);
            botPlayer.setPlayerTurn(true);
            setup();
            displayTable(firstLine, secondLine, thirdLine);
            currentPlayer();
            game();
        } else {
            playerOne.setPlayerTurn(true);
            botPlayer.setPlayerTurn(false);
            setup();
            displayTable(firstLine, secondLine, thirdLine);
            currentPlayer();
            game();
        }
        
    }
}

 /**
 * Show the game menu and get the game mode that the player wants to play
 */
const menu = () => {
    console.clear();
    showGameName()
    readline.emitKeypressEvents(process.stdin);
    if (process.stdin.isTTY) {
        process.stdin.setRawMode(true);
    }

    process.stdin.on('keypress', (str, key) => {

        if (key.ctrl && key.name === 'y') {
            gameChoice = gameModesEnum.SINGLE_PLAYER;
            singlePlayer()
        }

        if (key.ctrl && key.name === 'u') {
            gameChoice = gameModesEnum.MULTIPLAYER;
            multiplayer();
        }
    });
};

/**
 * Starts the tic-tac-toe game
 */
 const start = () => { 
    menu();
};

/**
 * End the application
 */
 rl.on("close", function () {
    console.clear();
    showGoodByeMessage()
    
    process.exit(0);
});

module.exports = {
    start,
};
