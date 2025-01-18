const prompt = require('prompt-sync')();

// A board represents the board visualization for TicTacToe
class Board{
    row;
    col;
    board;

    constructor(row, col) {
        this.row = row;
        this.col = col;
        this.board = [];
        /*
        if i is 0, and j is 0, array[i][j] = 1
        if i is 2, and j is 1, array[i][j] = 8
        if i is 2, and j is 2, array[i][j] = 9
         */
        for (let i = 0; i < row; i++) {
            this.board[i] = new Array(col);
            for (let j = 0; j < col; j++)
                this.board[i][j] = row * i + j + 1;
        }
    }

    getBoard() {
        return this.board;
    }


    getCol() {
        return this.col;
    }

    getRow() {
        return this.row;
    }

    /* A play is the number on the board that the user chose to make a move on
       makemove() places an X or O on that board number
     */
    makeMove(play){
        /*
        Play -> i
        1 -> 0
        2 -> 0
        3 -> 0
        4 -> 1
        7 -> 2
         */
        let rowNum = Math.floor( (play - 1) / this.col );
        let colNum = (play - 1) % this.col;
        this.board[rowNum][colNum] = "X";
    }

    // If there is an X or O occupying the slot, return true
    isTaken(play){
        let rowNum = Math.floor( (play - 1) / this.col );
        let colNum = (play - 1) % this.col;
        if( this.board[rowNum][colNum] == "X" ){
            return true;
        } else {
            return false;
        }
    }

    // If out of bounds, return false
    isInside(play) {
        /*
        If board is 3x3:
        3 ---> True
        4 ---> False
        9 ---> True
        10 ---> False
        11 ---> False
        */
        let boardSize = this.row * this.col;
        if ( play > boardSize || play <= 0 ) {
            return false; // out of range
        } else {
            return true; // in range
        }
    }

    // If there are 3 X's in one row, column or diagonal, the player wins.
    isWin(){
        /*
           Row         Diagonal      Column
        X | X | X     X | 2 | 3     1 | 2 | X
        ---------     ---------     ---------
        4 | 5 | 6     4 | X | 6     4 | 5 | X
        ---------     ---------     ---------
        7 | 8 | 9     7 | 8 | X     7 | 8 | X
        */

        // Check row
        for(let i = 0; i < this.row; i++) {
            let rowCount = 0;
            for(let j = 0; j < this.col; j++){
                if( this.board[i][j] == "X" ){
                    rowCount++;
                }
            }
            if (rowCount == this.col){
                return true;
            }
        }

        //Check diagonal



        //Check column
        for (let j = 0; j < this.col; j++){
            let colCount = 0;
            let column = this.board.map(d => d[j]);
            for (let k = 0; k < column.length; k++){
                if( column[k] == "X" ){
                    colCount++;
                }
                if (colCount == this.col){
                    return true;
                }
            }
        }
    }

    // Display the current state of the board
    displayBoard(){
        let dashes = "";

        for(let j = 0; j < this.col; j++){
            dashes += "---"
        }

        for(let i = 0; i < this.row; i++){
            console.log(this.board[i].join(' | '));
            if( i < this.row - 1){
                console.log(dashes);
            }
        }
    }
} // end of Board

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
        if ( board.isTaken(randomNumber) ) {
            opponentMem.splice(randomNumber, 1);
        } else {
            board.makeMove(randomNumber);
        }

     }


     // assign symbol to the opponent or player
     assignSymbol(){

     }


     // determine whose turn it is
     playerTurn(){

     }
}


let isWin = false;
console.log('Welcome to TicTacToe. You are X, choose a square');
let size = parseInt(prompt('What sized board would you like? '));
let board = new Board(size, size);
let game = new Game(board);

play = "";

while (!isWin) {
    console.log(' ');
    game.generateMove();
    board.displayBoard();

    console.log(' ');
    let play = (prompt('Make a move: '));

    if( play === "quit" ) {
        console.log("Opponent wins.");
        break;
    }

    play = parseInt(play);

    if ( !board.isInside(play) ) {
        console.log('Out of bounds, please try again.');
    } else {
        if ( board.isTaken(play) ) {
            console.log("Spot is taken, please try again.");
            console.log(' ');
        } else  {
            board.makeMove(play);

            if(board.isWin()){
                board.displayBoard();
                console.log("Congratulations, you won!");
                isWin = true; // Game ends
            }
        }
    }

}
