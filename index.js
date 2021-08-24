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

  if (a[0] === gamer.weapon && a[1] === gamer.weapon && a[2] === gamer.weapon){
    console.log(`YOU WON ${gamer.name}!!`)
    rl.question('Wanna play again? (yer/no)', function(reloaded){

    })
  } else if(b[0] === gamer.weapon && b[1] === gamer.weapon && b[2] === gamer.weapon){
    console.log('that works!')
  } else if(c[0] === gamer.weapon && c[1] === gamer.weapon && c[2] === gamer.weapon){
  
  } else if(a[0] === gamer.weapon && b[0] === gamer.weapon && c[0] === gamer.weapon){
    
  } else if(a[1] === gamer.weapon && b[1] === gamer.weapon && c[1] === gamer.weapon){
  
  } else if(a[2] === gamer.weapon && b[2] === gamer.weapon && c[2] === gamer.weapon){
  
  } else if(a[0] === gamer.weapon && b[1] === gamer.weapon && c[2] === gamer.weapon){
  
  } else if(a[2] === gamer.weapon && b[1] === gamer.weapon && c[0] === gamer.weapon){
  
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
    
  rl.question(`Chose a letter between a,b or c: `, function (letter) {
    if (!letter.match(/^(a|b|c)$/)){
      console.log('Chose a valid number')
      game()

    } else {
      round()

    rl.question("Know chose a number from 0 to 2: ", function (numero) {
      if (letter === "a") {
        console.log(`${gamer.name}`)
        a[parseInt(numero)] = gamer.weapon;
        console.log(`|${a}|\n|${b}|\n|${c}|\n`);
        winner()

      } else if (letter === "b") {
        console.log(`${gamer.name}`)
        b[parseInt(numero)] = gamer.weapon;
        console.log(`|${a}|\n|${b}|\n|${c}|\n`);
        winner()
        
      } else if (letter === "c") {
        console.log(`${gamer.name}`)
        c[parseInt(numero)] = gamer.weapon;
        console.log(`|${a}|\n|${b}|\n|${c}|\n`);
        winner()
        
      } 
    });
  }
    rl.prompt();
  }); //the mechanic that display the "X" or "O", depends on which player is playing

  aboutPlayer()
};

rl.on("close", function () {
  console.log(`BYE BYE ${play1.name, play1.numb} and ${play2.name, play2.numb}`);
  process.exit(0);

});

