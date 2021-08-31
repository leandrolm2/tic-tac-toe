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
  numb: 2,
};

const play2 = {
  name: "",
  weapon: "O",
  points: 0,
  numb: 1,
};

let gamer = {};

const start = () => {
  console.log('=====================================================================================')
  console.log('######## ####  ######     ########    ###     ######     ########  #######  ######## ') 
  console.log('   ##     ##  ##    ##       ##      ## ##   ##    ##       ##    ##     ## ##       ')
  console.log('   ##     ##  ##             ##     ##   ##  ##             ##    ##     ## ##       ')
  console.log('   ##     ##  ##             ##    ##     ## ##             ##    ##     ## ######   ')
  console.log('   ##     ##  ##             ##    ######### ##             ##    ##     ## ##       ')
  console.log('   ##     ##  ##    ##       ##    ##     ## ##    ##       ##    ##     ## ##       ')
  console.log('   ##    ####  ######        ##    ##     ##  ######        ##     #######  ######## ')
  console.log('=====================================================================================\n')
  
  console.log(`                                 Single Pleyer  [ctrl+u]                             \n`)
  console.log(`                                  multiplayer   [ctrl+y]                             \n`)
  console.log(`                                      exit      [ctrl+c]                             \n`)

  readline.emitKeypressEvents(process.stdin);
  if (process.stdin.isTTY){
    process.stdin.setRawMode(true);
  }

  process.stdin.on('keypress', (str, key) => {
    if (key.ctrl && key.name === 'y') {
      console.clear()
      multiplayer()
    }
    
    if (key.ctrl && key.name === 'u') {
      console.clear()
      multiplayer()
    }
  });

}



const multiplayer = () => {
  const aboutPlayer = () => {
    rl.question("what's your name player 1? ", function (name1) {
      rl.question("what's your name player 2? ", function (name2) {
        play1.name = name1;
        play2.name = name2;
        game();
      });
    });
    rl.prompt;
  }; //get the name of the players

  aboutPlayer();

  const game = () => {
    const round = () => {
      if (play1.numb % 2 == 0) {
        gamer = play1;
        play1.numb += 1;
      } else {
        play1.numb += 1;
      }

      if (play2.numb % 2 == 0) {
        gamer = play2;
        play2.numb += 1;
      } else {
        play2.numb += 1;
      }
    }; // Define witch player will gonna play

    rl.question(
      `Please, chose a letter between "a,b and c":  `,
      function (letter) {
        rl.question(`Know chose a number between 0 and 2: `, function (numb) {
          if (!letter.match(/^(a|b|c)$/) || !numb.match(/^(0|1|2)$/)) {
            console.clear();
            console.log("Chose a valid letter or number");
            game();
          } else {
            if (letter === "a") {
              if (a[parseInt(numb)] === "X" || a[parseInt(numb)] === "O") {
                console.log(
                  `This field it's not empty, please chose another option`
                );

                game();
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
                console.log(
                  `This field it's not empty, please chose another option`
                );
                game();
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
                game();
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
    ); //the mechanic that display the "X" or "O", depends on which player is playing

    const winner = () => {
      const rematch = () => {
        console.log(`YOU WON ${gamer.name}!!`);
        gamer.points += 2;

        rl.question("Wanna play again? (yes/no): ", function (reloaded) {
          switch (reloaded) {
            case "yes":
              console.log("NICE! SO...");
              play1.numb = 2;
              play2.numb = 1;

              for (i = 0; i < a.length; i++) {
                a[i] = "-";
                b[i] = "-";
                c[i] = "-";
              }

              game();
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
        game();
      }
    }; // The mechanic checks whether the player has won and if they want to continue playing
  };
};

start()

rl.on("close", function () {
  process.exit(0);
});
