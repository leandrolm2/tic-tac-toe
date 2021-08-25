//=======================================tic tac toe========================================//

const { ALL } = require("dns");
const readline = require("readline");
const { isFunction } = require("util");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const a = ["-", "-", "-"];
const b = ["-", "-", "-"];
const c = ["-", "-", "-"];

const play1 = {
  name: '',
  weapon: 'X',
  points: 0,
  numb:2    
}

const play2 = {
  name: '',
  weapon: 'O',
  points: 0,
  numb:1
}
let gamer = {}

const aboutPlayer = () =>{
  rl.question("what's your name player 1? ", function (name1) {
    rl.question("what's your name player 2? ", function (name2) {
      play1.name = name1
      play2.name = name2
      game();
    })
  })
  rl.prompt
} //get the name of the players

const winner = () => {
  const rematch = () => {
    rl.question('Wanna play again? (yes/no): ', function(reloaded){
      switch (reloaded) {
        case 'yes':
          console.log('NICE! SO...');
          play1.numb = 2
          play2.numb = 1
          gamer.points += 1

          for (i = 0; i <a.length;i++){
            a[i] = '-'
            b[i] = '-'
            c[i] = '-'
          }

          game()
          break;
        case 'no':
          console.log('Thas okay.');
          process.exit()
          break;
        default:
          console.log(`${reloaded} it's not a valid option, please say 'yes' or 'no'`);
          rematch()
      }
    });

  }

  if (a[0] === gamer.weapon && a[1] === gamer.weapon && a[2] === gamer.weapon){
    console.log(`YOU WON ${gamer.name}!!`);
    rematch();
    
  } else if(b[0] === gamer.weapon && b[1] === gamer.weapon && b[2] === gamer.weapon){
    console.log(`YOU WON ${gamer.name}!!`)
    rematch()

  } else if(c[0] === gamer.weapon && c[1] === gamer.weapon && c[2] === gamer.weapon){
    console.log(`YOU WON ${gamer.name}!!`)
    rematch()

  } else if(a[0] === gamer.weapon && b[0] === gamer.weapon && c[0] === gamer.weapon){
    console.log(`YOU WON ${gamer.name}!!`)
    rematch()

  } else if(a[1] === gamer.weapon && b[1] === gamer.weapon && c[1] === gamer.weapon){
    console.log(`YOU WON ${gamer.name}!!`)
    rematch()

  } else if(a[2] === gamer.weapon && b[2] === gamer.weapon && c[2] === gamer.weapon){
    console.log(`YOU WON ${gamer.name}!!`)
    rematch()

  } else if(a[0] === gamer.weapon && b[1] === gamer.weapon && c[2] === gamer.weapon){
    console.log(`YOU WON ${gamer.name}!!`)
    rematch()

  } else if(a[2] === gamer.weapon && b[1] === gamer.weapon && c[0] === gamer.weapon){
    console.log(`YOU WON ${gamer.name}!!`)
    rematch()

  } else if(!a.includes('-') && !b.includes('-') && !c.includes('-')){
    console.log('So close! The game has empate')
    rematch()

  } else {
    game()
  }
} // The mechanic that checks whether the player has won and wants to continue playing

aboutPlayer()

const game = () => {
  
  
  const round = () => {
    if (play1.numb % 2 == 0){
      gamer = play1
      play1.numb += 1
    } else {
      play1.numb += 1
    }

    if (play2.numb % 2 == 0){
      gamer = play2
      play2.numb += 1
    } else {
      play2.numb += 1
    }
  }// Define witch player will gonna play
    
  rl.question(`Please, chose a letter between "a,b and c":  `, function (letter) {
    rl.question(`Know chose a number between 0 and 2: `, function(numb){

      if (!letter.match(/^(a|b|c)$/) || !numb.match(/^(0|1|2)$/)){
        console.log('Chose a valid letter or number')
        game()

      } else {
  
        if (letter === "a") {
          if (a[parseInt(numb)] === 'X' || a[parseInt(numb)] === 'O'){
            console.log(`This field it's not empty, please chose another option`);
            game();

          } else {
            round()
            console.log(`${gamer.name}`)
            a[parseInt(numb)] = gamer.weapon;
            console.log(`|${a}|\n|${b}|\n|${c}|\n`);
            winner();
          }
          
  
        } else if (letter === "b") {
          if (b[parseInt(numb)] === 'X' || b[parseInt(numb)] === 'O'){
            console.log(`This field it's not empty, please chose another option`);
            game();

          } else {
            round()
            console.log(`${gamer.name}`)
            b[parseInt(numb)] = gamer.weapon;
            console.log(`|${a}|\n|${b}|\n|${c}|\n`);
            winner();
          }
          
          
        } else if (letter === "c") {
          if (c[parseInt(numb)] === 'X' || c[parseInt(numb)] === 'O'){
            console.log(`This field it's not empty, please chose another option`);
            game();

          } else {
            round()
            console.log(`${gamer.name}`);
            c[parseInt(numb)] = gamer.weapon;
            console.log(`|${a}|\n|${b}|\n|${c}|\n`);
            winner();

          }
        }
      }
    });    

    rl.prompt();
  }); //the mechanic that display the "X" or "O", depends on which player is playing

  aboutPlayer()
};

rl.on("close", function () {
  console.log(`BYE BYE ${play1.name} and ${play2.name}`);
  process.exit(0);

});

