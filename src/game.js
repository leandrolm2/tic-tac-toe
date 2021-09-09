const readline = require("readline");

const Player = require('./Player.js');
const DisplayArt = require('./display.js');
const Bot = require('./Bot')

const gameModesEnum = require('./enum/gameModes.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


const showArt = new DisplayArt()
let playFirst
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
 * Show the tic-tac-toe table
 */
const display = () => {
    console.log(`      |     |      `);
  
    console.log(`   ${firstLine[0]}  |  ${firstLine[1]}  |  ${firstLine[2]}         `)
  
    console.log(`______|_____|______ `);
  
    console.log(`      |     |      `);
  
    console.log(`   ${secondLine[0]}  |  ${secondLine[1]}  |  ${secondLine[2]}         `)
  
    console.log(`______|_____|______ `);
  
    console.log(`      |     |      `);
  
    console.log(`   ${thirdLine[0]}  |  ${thirdLine[1]}  |  ${thirdLine[2]}         `)
  
    console.log(`      |     |      `);
};



/**
 * Changes players turn
 */
const changeTurn = () => {
    if(gameChoice === gameModesEnum.SINGLE_PLAYER){
        if (playerOne) {
            playerOne.switchPlayer();
        }

        if (botPlayer) {
            botPlayer.switchPlayer();
        }
    } else {
        if (playerOne) {
            playerOne.switchPlayer();
        }

        if (playerTwo) {
            playerTwo.switchPlayer();
        }
    }
};

/**
 * Get a attribute value from the current player
 * @param {'weapon'|'name'} att Attribute name to be returned
 */
const CurrentPlayer = () => {
    if(gameChoice === gameModesEnum.SINGLE_PLAYER) {
        if (playerOne && playerOne.playerTurn) {
            playerRound = playerOne;
        }

        if (botPlayer && botPlayer.playerTurn) {
            playerRound = botPlayer;
        }
    } else {
        if (playerOne && playerOne.playerTurn) {
            playerRound = playerOne;
        }

        if (playerTwo && playerTwo.playerTurn) {
            playerRound = playerTwo;
        }
    }
};

/**
 * Gives the winner his points and congratulates him
 */
const declaretWinner = () => {
    if (playerOne.playerTurn) {
        playerOne.win();
        console.log(`YOU WON ${playerOne.name}!!`);
    } else if (playerTwo && playerTwo.playerTurn) {
        playerTwo.win();
        console.log(`YOU WON ${playerTwo.name}!!`);
    } else {
        botPlayer.win();
        console.log(`${botPlayer.name} is the Winner!!`);
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
                console.log("NICE! SO...");
                multiplayer(true);
            }

            if (gameChoice === gameModesEnum.SINGLE_PLAYER) {
                console.clear()
                console.log("NICE! SO...");
                singlePlayer(true);
            }

        break;
        case "no":
            if (gameChoice === gameModesEnum.MULTIPLAYER) {
                
                if (playerOne.points > playerTwo.points) {

                    console.log(`With ${playerOne.points} points, ${playerOne.name} was the overall winner of the match over ${playerTwo.name}, with ${playerTwo.points} poinst`);
                    menu();
                } else if (playerTwo.points > playerOne.points) {
    
                    console.log(`With ${playerTwo.points} points, ${playerTwo.name} was the overall winner of the match over ${playerOne.name}, with ${playerOne.points} poinst`);
                    menu();
                } else {
    
                    console.log( `The overall match was an empate, both players with the amount of ${playerOne.points}`);
                    menu();
                }
            }

            if(gameChoice === gameModesEnum.SINGLE_PLAYER){
                if (playerOne.points > botPlayer.points) {

                    console.log(`With ${playerOne.points} points, ${playerOne.name} was the overall winner over ${botPlayer.name}, with ${botPlayer.points} poinst`);
                    menu();
                } else if (botPlayer.points > playerOne.points) {
    
                    console.log(`With ${botPlayer.points} points, ${botPlayer.name} was the overall winner over ${playerOne.name}, with ${playerOne.points} poinst`);
                    menu();
                } else {
    
                    console.log( `The overall game was an empate, both players with the amount of ${playerOne.points}`);
                    menu();
                }
            }
        break;
        default:
            console.log(`${answer} it's not a valid option, please say 'yes' or 'no'`);
            rematch();
        }
    });
}

/**
 * 
 * Makes the decision of the bot's move
 */
const botMove = (firstLine, secondLine, thirdLine) => {
    const line = Math.floor(Math.random() * 3)+1;
    const column = Math.floor(Math.random() * 3);
    
    if (firstLine[0] !== 'X' && firstLine[1] !== 'X' && firstLine[2] !== 'X') {
        
        if(firstLine[column] === ' '){
            return firstLine[column] = botPlayer.weapon
        } else {
            botMove(firstLine, secondLine, thirdLine)
        }

    } else if (secondLine[0] !== 'X' && secondLine[1] !== 'X' && secondLine[2] !== 'X') {
        
        if(secondLine[column] === ' '){
            return secondLine[column] = botPlayer.weapon
        } else {
            botMove(firstLine, secondLine, thirdLine)
        }

    } else if (thirdLine[0] !== 'X' && thirdLine[1] !== 'X' && thirdLine[2] !== 'X') {
        
        if(thirdLine[column] === ' '){
            return thirdLine[column] = botPlayer.weapon
        } else {
            botMove(firstLine, secondLine, thirdLine)
        }

    } else if (firstLine[0] !== 'X' && secondLine[0] !== 'X' && thirdLine[0] !== 'X') {
        
        if(line === 1 && firstLine[column] === ' '){
            return firstLine[column]  = botPlayer.weapon
        } else if (line === 2 && secondLine[column] === ' '){
            return secondLine[column]  = botPlayer.weapon
        } else if(line === 3 && thirdLine[column] === ' '){
            return thirdLine[column]  = botPlayer.weapon
        } else {
            botMove(firstLine, secondLine, thirdLine)
        }

    } else if (firstLine[1] !== 'X' && secondLine[1] !== 'X' && thirdLine[1] !== 'X') {
        
        if(line === 1 && firstLine[column] === ' '){
            return firstLine[column]  = botPlayer.weapon
        } else if (line === 2 && secondLine[column] === ' '){
            return secondLine[column]  = botPlayer.weapon
        } else if(line === 3 && thirdLine[column] === ' '){
            return thirdLine[column] = botPlayer.weapon
        } else {
            botMove(firstLine, secondLine, thirdLine)
        }
        
    } else if (firstLine[2] !== 'X' && secondLine[2] !== 'X' && thirdLine[2] !== 'X') {
        
        if(line === 1 && firstLine[column] === ' '){
            return firstLine[column] = botPlayer.weapon
        } else if (line === 2 && secondLine[column] === ' '){
            return secondLine[column] = botPlayer.weapon
        } else if(line === 3 && thirdLine[column] === ' '){
            return thirdLine[column] = botPlayer.weapon
        } else {
            botMove(firstLine, secondLine, thirdLine)
        }
        
    } else if (firstLine[0] !== 'X' && secondLine[1] !== 'X' && thirdLine[2] !== 'X') {
        
        if(line === 1 && firstLine[column] === ' '){
            return firstLine[column] = botPlayer.weapon
        } else if (line === 2 && secondLine[column] === ' '){
            return secondLine[column] = botPlayer.weapon
        } else if(line === 3 && thirdLine[column] === ' '){
            return thirdLine[column] = botPlayer.weapon
        } else {
            botMove(firstLine, secondLine, thirdLine)
        }
        
    } else if (firstLine[2] !== 'X' && secondLine[1] !== 'X' && thirdLine[0] !== 'X') {
        
        if(line === 1 && firstLine[column] === ' '){
            return firstLine[column] = botPlayer.weapon
        } else if (line === 2 && secondLine[column] === ' '){
            return secondLine[column] = botPlayer.weapon
        } else if(line === 3 && thirdLine[column] === ' '){
            return thirdLine[column] = botPlayer.weapon
        } else {
            botMove(firstLine, secondLine, thirdLine)
        }

    } else {
        
        if(line === 1){
            if(firstLine[column] === ' '){
                return firstLine[column] = botPlayer.weapon
            } else {
                botMove(firstLine, secondLine, thirdLine)
            }
            
        } else if (line === 2){
            if(secondLine[column] === ' '){
                return secondLine[column] = botPlayer.weapon
            } else {
                botMove(firstLine, secondLine, thirdLine)
            }
        } else {
            if(thirdLine[column] === ' '){
                return thirdLine[column] = botPlayer.weapon
            } else {
                botMove(firstLine, secondLine, thirdLine)
            }
        }
    }
 
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
        CurrentPlayer()
        game();
    }
};

/**
 * Show the current status of the game
 */
const consequenceMove = () => {
    console.clear(); 
    display();
    checkWinner();
};

/**
 * Get the player moviments
 */
const game = () => {
    if (playerRound === botPlayer){
        botMove(firstLine, secondLine, thirdLine)
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

                    console.log('This field it\'s not empty, please chose another option');
                    game();
                  } else {

                    firstLine[parsedNumber] = playerRound.getWeapon();//getCurrentPlayerAttribute('weapon'); A form to call the variable inside the class
                    consequenceMove();
                  }
                } else if (parsedLetter === 'b') {
                  if (secondLine[parsedNumber] !== ' ') {
                
                    console.log(`This field it's not empty, please chose another option`);
                    game();
                  } else {

                    secondLine[parsedNumber] = playerRound.getWeapon();
                    consequenceMove();
                  }
                } else if (parsedLetter === 'c') {
                  if (thirdLine[parsedNumber] !== ' ') {

                    console.log(`This field it's not empty, please chose another option`);
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
                display();
                CurrentPlayer()
                game();
            });
        });
    } else {
        playerOne.playerTurn = true
        playerTwo.playerTurn = false
        setup();
        display();
        CurrentPlayer()
        game();
    }
};

const singlePlayer = (rematch = false) => {

    if (!rematch) {
        rl.question('Do you want let the bot make the first move? (yes/no)', (firstMove) => {
            rl.question("what's your name player 1? ", (namePlayerOne) => {
                playFirst = firstMove  
                if(firstMove === 'yes'){
                    playerOne = new Player(namePlayerOne, 'X');
                    botPlayer = new Bot('bot', 'O', true);
                    setup();
                    display();
                    CurrentPlayer();
                    game();                    
                } else if (firstMove === 'no'){
                    playerOne = new Player(namePlayerOne, 'X', true);
                    botPlayer = new Bot('bot', 'O');
                    setup();
                    display();
                    CurrentPlayer();
                    game();
                } else {
                    singlePlayer() 
                }        
                            
            });
        });
        
    } else {
        if (playFirst === 'yes'){
            playerOne.playerTurn = false;
            botPlayer.playerTurn = true;
            setup();
            display();
            CurrentPlayer();
            game();
        } else {
            playerOne.setPlayerTurn()
            botPlayer.setPlayerTurn()
            setup();
            display();
            CurrentPlayer();
            game();
        }
        
    }
}

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
    showArt.showGoodByeMessage()
    
    process.exit(0);
});

 /**
 * Show the game menu and get the game mode that the player wants to play
 */
const menu = () => {
    console.clear();
    showArt.showGameName()
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

module.exports = {
    start,
};
