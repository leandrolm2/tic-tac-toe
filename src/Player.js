class Player {

    /**
     * @param {string} name Player name
     * @param {string} weapon Player simbol used on the plays
     * @param {boolean} [playerTurn] Define if its the player turn or not. Defaults false.
     */
    constructor(name, weapon, playerTurn = false) {
        this.name = name;
        this.weapon = weapon;
        this.playerTurn = playerTurn;
        this.points = 0;
    }


    /**
     * 
     * @returns {string} return the player name
     */
    getName() {
        return this.name;
    };

    /**
     * 
     * @returns {boolean} set to the original player turn
     */
    getPlayerTurn() {
        return this.playerTurn
    }

    /**
     * 
     * @returns {string} returns weapon the current player 
     */
    getWeapon() {
        return this.weapon;
    };

    setTurn() {
        return this.playerTurn
    }
    
    /**
     * Gives the player 2 points by winning
     */
    win() {
        this.points += 2;
    };

    /**
     * Gives the player 1 point by the draw
     */
    draw() {
        this.points += 1;
    };

    /**
     * Switch the player turn between true or false
     */
    switchPlayer() {
        this.playerTurn = !this.playerTurn;
    };

    /**
     * @returns {number} Player points
     */
}


module.exports = Player
