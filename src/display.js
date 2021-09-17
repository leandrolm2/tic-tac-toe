
showGameName = () => {
    console.log('=====================================================================================');
    console.log('######## ####  ######     ########    ###     ######     ########  #######  ######## ');
    console.log('   ##     ##  ##    ##       ##      ## ##   ##    ##       ##    ##     ## ##       ');
    console.log('   ##     ##  ##             ##     ##   ##  ##             ##    ##     ## ##       ');
    console.log('   ##     ##  ##             ##    ##     ## ##             ##    ##     ## ######   ');
    console.log('   ##     ##  ##             ##    ######### ##             ##    ##     ## ##       ');
    console.log('   ##     ##  ##    ##       ##    ##     ## ##    ##       ##    ##     ## ##       ');
    console.log('   ##    ####  ######        ##    ##     ##  ######        ##     #######  ######## ');
    console.log('=====================================================================================\n');
    
    console.log('                               Single Pleyer  [ctrl+y]                             \n');
    console.log('                                multiplayer   [ctrl+u]                             \n');
    console.log('                                    exit      [ctrl+c]                             \n');

};

showGoodByeMessage = () => {
    console.log('======================================================================================================================================')
    console.log(' ######  ######## ########    ##    ##  #######  ##     ##    ##    ## ######## ##     ## ########    ######## #### ##     ## ######## ')
    console.log('##    ## ##       ##           ##  ##  ##     ## ##     ##    ###   ## ##        ##   ##     ##          ##     ##  ###   ### ##       ')
    console.log('##       ##       ##            ####   ##     ## ##     ##    ####  ## ##         ## ##      ##          ##     ##  #### #### ##       ')
    console.log(' ######  ######   ######         ##    ##     ## ##     ##    ## ## ## ######      ###       ##          ##     ##  ## ### ## ######   ')
    console.log('      ## ##       ##             ##    ##     ## ##     ##    ##  #### ##         ## ##      ##          ##     ##  ##     ## ##       ')
    console.log('##    ## ##       ##             ##    ##     ## ##     ##    ##   ### ##        ##   ##     ##          ##     ##  ##     ## ##       ')
    console.log(' ######  ######## ########       ##     #######   #######     ##    ## ######## ##     ##    ##          ##    #### ##     ## ######## ')
    console.log('======================================================================================================================================')
};

showNotEmpty = () => {
    console.log('This field it\'s not empty, please chose another option');
}


displayTable = (firstLine, secondLine, thirdLine) => {
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

winnerMessage = (playerRound) => {
    console.log(`YOU WON ${playerRound.getName()}!!`);
}

loseToBot = () => {
    console.log(`${botPlayer.getName()} is the Winner!!`);
}

showsOverhallWinnerMulti = (playerOne, playerTwo) => {
    if (playerOne.getPoints() > playerTwo.getPoints()) {

        return console.log(`With ${playerOne.getPoints()} points, ${playerOne.getName()} was the overall winner of the match over ${playerTwo.getName()}, with ${playerTwo.getName()} poinst`);
        
    } else if (playerTwo.points > playerOne.points) {

        return console.log(`With ${playerTwo.getPoints()} points, ${playerTwo.getName()} was the overall winner of the match over ${playerOne.getName()}, with ${playerOne.getPoints} poinst`);
        
    } else {

        return console.log( `The overall match was an empate, both players with the amount of ${playerOne.getPoints()}`);
        
    }
}

showsOverhallWinnerSingle = (playerOne, botPlayer) => {
    if (playerOne.getPoints() > botPlayer.getPoints()) {

        console.log(`With ${playerOne.getPoints()} points, ${playerOne.getName()} was the overall winner over ${botPlayer.getName()}, with ${botPlayer.getPoints()} poinst`);
        menu();
    } else if (botPlayer.points > playerOne.points) {

        console.log(`With ${botPlayer.getPoints()} points, ${botPlayer.getName()} was the overall winner over ${playerOne.getName()}, with ${playerOne.getPoints()} poinst`);
        menu();
    } else {

        console.log( `The overall game was an empate, both players with the amount of ${playerOne.getPoints()}`);
        menu();
    }
}

conectionMessage = () => {
    console.log("NICE! SO...");
}

module.exports = {
    showGameName,
    showGoodByeMessage,
    showNotEmpty,
    displayTable,
    winnerMessage,
    loseToBot,
    showsOverhallWinnerMulti,
    showsOverhallWinnerSingle,
    conectionMessage,
};
