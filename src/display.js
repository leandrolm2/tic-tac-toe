
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

connectionMessage = () => {
    console.log("NICE! SO...");
}

module.exports = {
    showGameName,
    showGoodByeMessage,
    showNotEmpty,
    displayTable,
    winnerMessage,
    loseToBot,
    connectionMessage,
};
