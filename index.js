//=======================================tic tac toe========================================//

const readline = require("readline");
const readlinesync = require("readline-sync");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const a = ["-", "-", "-"];
const b = ["-", "-", "-"];
const c = ["-", "-", "-"];

const play1 = {
  name: "",
  weapon: "X",
  points: 0,
  numb: 1,
};

const play2 = {
  name: "",
  weapon: "O",
  points: 0,
  numb: 2,
};

const bot = {
  name: "bot",
  weapon: "O",
  points: 0,
  numb: 2,
  abc: function () {
      let moviment = Math.floor(Math.random() * 3)+1;
      if (moviment === 1){
          return 'a'
      } else if (moviment === 2){
        return 'b'
    } else if (moviment === 3){
        return 'c'
    }
  },
  localNumb: function() {
   return Math.floor(Math.random() * 3)
  }
};

let gamer = {};
let decision = 'qulquer coisa'

const start = () => {
  const menu = () => {
  console.log('=====================================================================================')
  console.log('######## ####  ######     ########    ###     ######     ########  #######  ######## ') 
  console.log('   ##     ##  ##    ##       ##      ## ##   ##    ##       ##    ##     ## ##       ')
  console.log('   ##     ##  ##             ##     ##   ##  ##             ##    ##     ## ##       ')
  console.log('   ##     ##  ##             ##    ##     ## ##             ##    ##     ## ######   ')
  console.log('   ##     ##  ##             ##    ######### ##             ##    ##     ## ##       ')
  console.log('   ##     ##  ##    ##       ##    ##     ## ##    ##       ##    ##     ## ##       ')
  console.log('   ##    ####  ######        ##    ##     ##  ######        ##     #######  ######## ')
  console.log('=====================================================================================\n')
  
  console.log(`                                 Single Pleyer  [ctrl+y]                             \n`)
  console.log(`                                  multiplayer   [ctrl+u]                             \n`)
  console.log(`                                      exit      [ctrl+c]                             \n`)

  readline.emitKeypressEvents(process.stdin);
  if (process.stdin.isTTY){
    process.stdin.setRawMode(true);
  }

  process.stdin.on('keypress', (str, key) => {

    if (key.ctrl && key.name === 'y') {
      decision = 'y'
      console.clear()
      aboutPlayer()
    }
    
    if (key.ctrl && key.name === 'u') {
      decision = 'u'
      console.clear()
      aboutPlayer()
    }
  });

  const aboutPlayer = () => {
    if(decision === 'u'){
      console.log(decision)
      rl.question("what's your name player 1? ", function (name1) {
        rl.question("what's your name player 2? ", function (name2) {
          play1.name = name1;
          play2.name = name2;
          game(decision)
          
        });
      });
      rl.prompt;
    } else {
        gamer = play1
        rl.question("what's your name player 1? ", function (name1) {
        play1.name = name1
        game(decision)
      });
      rl.prompt;
    }
  }; //get the name of the players
 }//Menu
 
  menu()

  const game = (decision) => {
    
    const round = () => {

      if(decision === 'u'){
        if (play1.numb === 1) {
          gamer = play1;
          play1.numb = 2;
        } else {
          play1.numb = 1;
        }

        if (play2.numb === 1) {
          gamer = play2;
          play2.numb = 2;
        } else {
          play2.numb = 1;
        }

      } else if(decision === 'y'){
        if (play1.numb === 2) {
            gamer = play1;
            play1.numb = 1;
          } else {
            play1.numb = 2;
          }
  
        if (bot.numb === 2) {
          gamer = bot;
          bot.numb = 1;
        } else {
          bot.numb = 2;
        }
        singlePlayer()
      }
    }; // Define witch player will gonna play

    const winner = () => {
      const rematch = () => {
        console.log(`YOU WON ${gamer.name}!!`);
        gamer.points += 2;

        rl.question("Wanna play again? (yes/no): ", function (reloaded) {
          switch (reloaded) {
            case "yes":
              console.log("NICE! SO...");
              if (decision === 'u'){
                play1.numb = 1;
                play2.numb = 2;
              } else {
                play1.numb = 2
                bot.numb = 1
                
              }

              for (i = 0; i < a.length; i++) {
                a[i] = "-";
                b[i] = "-";
                c[i] = "-";
              }

              singlePlayer();
              break;
            case "no":
              if (play1.points > play2.points) {
                console.log(
                  `With ${play1.points} points, ${play1.name} was the overall winner of the match over ${play2.name}, with ${play2.points} poinst`
                );
                process.exit();
              } else if (play2.points > play1.points) {
                console.log(
                  `With ${play2.points} points, ${play2.name} was the overall winner of the match over ${play1.name}, with ${play1.points} poinst`
                );
                process.exit();
              } else {
                console.log(
                  `The overall match was an empate, both players with the amount of ${play1.points}`
                );
                process.exit();
              }
              break;
            default:
              console.log(
                `${reloaded} it's not a valid option, please say 'yes' or 'no'`
              );
              rematch();
          }
        });
        rl.prompt;
      }; //reset the game and decide the winner between players

      if ( a[0] === gamer.weapon && a[1] === gamer.weapon && a[2] === gamer.weapon) {
       
        rematch();

      } else if (b[0] === gamer.weapon && b[1] === gamer.weapon && b[2] === gamer.weapon) {
        
        rematch();

      } else if (c[0] === gamer.weapon && c[1] === gamer.weapon && c[2] === gamer.weapon) {
        
        rematch();

      } else if (a[0] === gamer.weapon && b[0] === gamer.weapon && c[0] === gamer.weapon) {
        
        rematch();

      } else if (a[1] === gamer.weapon && b[1] === gamer.weapon && c[1] === gamer.weapon) {
        
        rematch();

      } else if (a[2] === gamer.weapon && b[2] === gamer.weapon && c[2] === gamer.weapon) {
        
        rematch();

      } else if (a[0] === gamer.weapon && b[1] === gamer.weapon && c[2] === gamer.weapon) {
        
        rematch();

      } else if (a[2] === gamer.weapon && b[1] === gamer.weapon && c[0] === gamer.weapon) {
        
        rematch();

      } else if (!a.includes("-") && !b.includes("-") && !c.includes("-")) {
        console.log("So close! The game has empate");
        play1.points += 1;
        play2.points += 1;
        rematch();
      } else {
        game(decision);
      }
    }; // The mechanic checks whether the player has won and if they want to continue playing

    function singlePlayer() {
      if (gamer.name === "bot") {
        let move = gamer.abc();
        let newLocal = gamer.localNumb();
        console.log(newLocal)
        if (move === "a") {
          if (a[newLocal] === "O" || a[newLocal] === "X") {
            game(decision);
          } else {
            
            
            console.clear();
            a[newLocal] = gamer.weapon;
            console.log(`${gamer.name}, That was your move`);
            console.log(`|${a}|\n|${b}|\n|${c}|\n`);
            round();
            winner();
          }
        } else if (move === "b") {
          if (b[newLocal] === "O" || b[newLocal] === "X") {
            game(decision);
          } else {
            
            
            console.clear();
            b[newLocal] = gamer.weapon;
            console.log(`${gamer.name}, That was your move`);
            console.log(`|${a}|\n|${b}|\n|${c}|\n`);
            round();
            winner();
          }
        } else if (move === 'c'){
          if (c[newLocal] === "O" || c[newLocal] === "X") {
            game(decision);
          } else {
            console.clear();
            c[newLocal] = gamer.weapon;
            console.log(`${gamer.name}, That was your move`);
            console.log(`|${a}|\n|${b}|\n|${c}|\n`);
            round();
            winner();
          }
        }
    
        
      } else {
        rl.question(`chose a letter between a,b or c: `, function (letter) {
          rl.question(`chose a number between 0,1 and 2: `, function (numb) {
            if (!letter.match(/^(a|b|c)$/) || !numb.match(/^(0|1|2)$/)) {
              console.clear();
              console.log("Chose a valid letter or number");
              game(decision);
            } else {
              if (letter === "a") {
                if (a[parseInt(numb)] === "X" || a[parseInt(numb)] === "O") {
                  console.log(
                    `This field it's not empty, please chose another option`
                  );
    
                  game(decision);
                } else {
                  a[parseInt(numb)] = gamer.weapon;
                  
                  console.clear();
                  console.log(`${gamer.name}, That was your move`); 
                  console.log(`|${a}|\n|${b}|\n|${c}|\n`);
                  round();
                  winner();
                }
              } else if (letter === "b") {
                if (b[parseInt(numb)] === "X" || b[parseInt(numb)] === "O") {
                  console.log(
                    `This field it's not empty, please chose another option`
                  );
                  game(decision);
                } else {
                  b[parseInt(numb)] = gamer.weapon;
                  
                  console.clear();
                  console.log(`${gamer.name}, That was your move`);
                  console.log(`|${a}|\n|${b}|\n|${c}|\n`);
                  round();
                  winner();
                }
              } else if (letter === "c") {
                if (c[parseInt(numb)] === "X" || c[parseInt(numb)] === "O") {
                  console.log(
                    `This field it's not empty, please chose another option`
                  );
                  game(decision);
                } else {
                  c[parseInt(numb)] = gamer.weapon;
                  
                  console.clear();
                  console.log(`${gamer.name}, That was your move`);
                  console.log(`|${a}|\n|${b}|\n|${c}|\n`);
                  round();
                  winner();
                }
              }
            }
          });
        });
      }
    };

    function multiplayer() {
      rl.question(`Please, chose a letter between "a,b and c":  `, function (letter) {
          rl.question(`Know chose a number between 0 and 2: `, function (numb) {
            if (!letter.match(/^(a|b|c)$/) || !numb.match(/^(0|1|2)$/)) {
              console.clear();
              console.log("Chose a valid letter or number");
              game(decision);
            } else {
              if (letter === "a") {
                if (a[parseInt(numb)] === "X" || a[parseInt(numb)] === "O") {
                  console.log(
                    `This field it's not empty, please chose another option`
                  );
  
                  game(decision);
                } else {
                  round();
                  console.clear();
                  console.log(`${gamer.name}, That was your move`);
                  a[parseInt(numb)] = gamer.weapon;
                  console.log(`|${a}|\n|${b}|\n|${c}|\n`);
                  winner();
                }
              } else if (letter === "b") {
                if (b[parseInt(numb)] === "X" || b[parseInt(numb)] === "O") {
                  console.log(`This field it's not empty, please chose another option`);
                  game(decision);
                } else {
                  round();
                  console.clear();
                  console.log(`${gamer.name}, That was your move`);
                  b[parseInt(numb)] = gamer.weapon;
                  console.log(`|${a}|\n|${b}|\n|${c}|\n`);
                  winner();
                }
              } else if (letter === "c") {
                if (c[parseInt(numb)] === "X" || c[parseInt(numb)] === "O") {
                  console.log(
                    `This field it's not empty, please chose another option`
                  );
                  game(decision);
                } else {
                  round();
                  console.clear();
                  console.log(`${gamer.name}, That was your move`);
                  c[parseInt(numb)] = gamer.weapon;
                  console.log(`|${a}|\n|${b}|\n|${c}|\n`);
                  winner();
                }
              }
            }
          });
  
          rl.prompt();
        }
      ); 
      } //the mechanic that display the "X" or "O", depends on which player is playing

    switch (decision) {
      case 'y':
        decision = 'y'
        singlePlayer()
        
        break;
      case 'u':
        decision = 'u'
        multiplayer()
        break;
      default:
        console.log("didn't work")
        break;   
    }

  };
}

start()
rl.on("close", function () {
  process.exit(0);
});
