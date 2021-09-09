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
        this.points = 0;
    };
    
};



module.exports = Bot;