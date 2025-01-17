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

    }

    // If out of bounds, return false
    isInside(play) {

    }


    // If there are 3 X's in one row, column or diagonal, the player wins.
    isWin(){

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


let isWin = false;
console.log('Welcome to TicTacToe. You are X, choose a square');
let size = parseInt(prompt('What sized board would you like? '));
let board = new Board(size, size);
play = "";
while (!isWin && play !== "quit") {
    console.log(' ');
    board.displayBoard();

    console.log(' ');
    let play = (prompt('Make a move: '));

    if( play === "quit" ) {
        console.log("Opponent wins.");
        break;
    }
    play = parseInt(play);
    board.makeMove(play);
    board.displayBoard();
}