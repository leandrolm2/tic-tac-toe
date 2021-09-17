const Player = require('./Player')

class Bot extends Player{
    /**
     * 
     * @param {string} name Player name
     * @param {string} weapon Player simbol used on the plays
     * @param {boolean} playerTurn Define if its the player turn or not. Defaults false.
     */
    constructor(name, weapon, playerTurn) {
        super(name, weapon, playerTurn);
    };


    /**
    * 
    * Makes the decision of the bot's move
    */
    botMove(firstLine, secondLine, thirdLine) {
        const line = Math.floor(Math.random() * 3)+1;
        const column = Math.floor(Math.random() * 3);
        
        if (firstLine[0] !== 'X' && firstLine[1] !== 'X' && firstLine[2] !== 'X') {
            
            if(firstLine[column] === ' '){
                firstLine[column] = botPlayer.weapon
                return 
            } else {
                this.botMove(firstLine, secondLine, thirdLine)
            }
      
        } else if (secondLine[0] !== 'X' && secondLine[1] !== 'X' && secondLine[2] !== 'X') {
            
            if(secondLine[column] === ' '){
                secondLine[column] = botPlayer.weapon
                return 
            } else {
                this.botMove(firstLine, secondLine, thirdLine)
            }
      
        } else if (thirdLine[0] !== 'X' && thirdLine[1] !== 'X' && thirdLine[2] !== 'X') {
            
            if(thirdLine[column] === ' '){
                thirdLine[column] = botPlayer.weapon
                return 
            } else {
                this.botMove(firstLine, secondLine, thirdLine)
            }
      
        } else if (firstLine[0] !== 'X' && secondLine[0] !== 'X' && thirdLine[0] !== 'X') {
            
            if(line === 1 && firstLine[column] === ' '){
                firstLine[column]  = botPlayer.weapon
                return 
            } else if (line === 2 && secondLine[column] === ' '){
                secondLine[column]  = botPlayer.weapon
                return 
            } else if(line === 3 && thirdLine[column] === ' '){
                thirdLine[column]  = botPlayer.weapon
                return 
            } else {
                this.botMove(firstLine, secondLine, thirdLine)
            }
      
        } else if (firstLine[1] !== 'X' && secondLine[1] !== 'X' && thirdLine[1] !== 'X') {
            
            if(line === 1 && firstLine[column] === ' '){
                firstLine[column]  = botPlayer.weapon
                return 
            } else if (line === 2 && secondLine[column] === ' '){
                secondLine[column]  = botPlayer.weapon
                return 
            } else if(line === 3 && thirdLine[column] === ' '){
                thirdLine[column] = botPlayer.weapon
                return 
            } else {
                this.botMove(firstLine, secondLine, thirdLine)
            }
            
        } else if (firstLine[2] !== 'X' && secondLine[2] !== 'X' && thirdLine[2] !== 'X') {
            
            if(line === 1 && firstLine[column] === ' '){
                firstLine[column] = botPlayer.weapon
                return 
            } else if (line === 2 && secondLine[column] === ' '){
                secondLine[column] = botPlayer.weapon
                return 
            } else if(line === 3 && thirdLine[column] === ' '){
                thirdLine[column] = botPlayer.weapon
                return 
            } else {
                this.botMove(firstLine, secondLine, thirdLine)
            }
            
        } else if (firstLine[0] !== 'X' && secondLine[1] !== 'X' && thirdLine[2] !== 'X') {
            
            if(line === 1 && firstLine[column] === ' '){
                firstLine[column] = botPlayer.weapon
                return 
            } else if (line === 2 && secondLine[column] === ' '){
                secondLine[column] = botPlayer.weapon
                return 
            } else if(line === 3 && thirdLine[column] === ' '){
                thirdLine[column] = botPlayer.weapon
                return 
            } else {
                this.botMove(firstLine, secondLine, thirdLine)
            }
            
        } else if (firstLine[2] !== 'X' && secondLine[1] !== 'X' && thirdLine[0] !== 'X') {
            
            if(line === 1 && firstLine[column] === ' '){
                firstLine[column] = botPlayer.weapon
                return 
            } else if (line === 2 && secondLine[column] === ' '){
                secondLine[column] = botPlayer.weapon
                return 
            } else if(line === 3 && thirdLine[column] === ' '){
                thirdLine[column] = botPlayer.weapon
                return 
            } else {
                this.botMove(firstLine, secondLine, thirdLine)
            }
      
        } else {
            
            if(line === 1){
                if(firstLine[column] === ' '){
                    firstLine[column] = botPlayer.weapon
                    return 
                } else {
                    this.botMove(firstLine, secondLine, thirdLine)
                }
                
            } else if (line === 2){
                if(secondLine[column] === ' '){
                    secondLine[column] = botPlayer.weapon
                    return 
                } else {
                    this.botMove(firstLine, secondLine, thirdLine)
                }
            } else {
                if(thirdLine[column] === ' '){
                    thirdLine[column] = botPlayer.weapon
                    return 
                } else {
                    this.botMove(firstLine, secondLine, thirdLine)
                }
            }
        }
      
      }
      
    
};



module.exports = Bot;