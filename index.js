//=======================================tic tac toe========================================//

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
} //get the name of players

const winner = () => {
  if ([a[0],a[1],a[2]].includes(gamer.weapon)){
    console.log(`WELL PLAYED ${gamer.name}!!`)
  } else if([b[0],b[1],b[2]].includes(gamer.weapon)){

  } else if([c[0],c[1],c[2]].includes(gamer.weapon)){

  } else if([a[0],b[0],c[0]].includes(gamer.weapon)){
    
  } else if([a[1],b[1],c[1]].includes(gamer.weapon)){

  } else if([a[2],b[2],c[2]].includes(gamer.weapon)){

  } else if([a[0],b[1],c[2]].includes(gamer.weapon)){

  } else if([a[2],b[1],c[0]].includes(gamer.weapon)){

  } else {
    game()
  }
}

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
  });//the mechanic of the game

  aboutPlayer()
};

rl.on("close", function () {
  console.log(`BYE BYE ${play1.name, play1.numb} and ${play2.name, play2.numb}`);
  process.exit(0);

});

