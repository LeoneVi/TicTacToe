// The class where player tracks it's symbol and opponent randomly generates moves
class Game{
    board;
    constructor(board){
        this.board = board;
    }

    // Opponent makes a random move on the board
    generateMove(){


        // The purpose of opponent mem, is to prevent the opponent from generating spots that are already taken more than once.
        let opponentMem = [];
        for (let i = 0; i < board.getRow() * board.getCol(); i++) {
            opponentMem[i] = i + 1;
        }
        let randomNumber = Math.floor(Math.random() * opponentMem.length ) + 1;
        if ( this.board.isTaken(randomNumber) ) {
            opponentMem.splice(randomNumber, 1);
        } else {
            this.board.makeMove(randomNumber);
        }

    }


    // assign symbol to the opponent or player
    assignSymbol(){

    }


    // determine whose turn it is
    playerTurn(){

    }
}


module.exports = Game;
