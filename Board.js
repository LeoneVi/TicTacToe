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

    /* Converts a "play" number to a 2d array in the format of a [row, col]
     */
    playToRowCol(play) {
        let rowNum = Math.floor( (play - 1) / this.col );
        let colNum = (play - 1) % this.col;
        return [rowNum, colNum]
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
        let [row, col] = this.playToRowCol(play)
        this.board[row][col] = "X";
    }

    // If there is an X or O occupying the slot, return true
    isTaken(play){
        let [row, col] = this.playToRowCol(play)
        return this.board[row][col] == "X";
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
        return !(play > boardSize || play <= 0);
    }

    isRow(){
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
    }

    isCol(){
        //Check column
        for(let i = 0; i < this.col; i++){
            let colCount = 0;
            for(let j = 0; j < this.row; j++){
                if( this.board[j][i] == "X" ){
                    colCount++;
                }
                if (colCount == this.row){
                    return true;
                }
            }
        }
    }

    isLeftDiagonal(){
        //Check left diagonal
        let leftCount = 0;
        for ( let i = 0; i < this.row; i++) {
            if( this.board[i][i] == "X" ){
                leftCount++;
            }
            if(leftCount == this.col){
                return true;
            }
        }
    }

    isRightDiagonal(){
    }

    // If there are 3 X's in one row, column or diagonal, the player wins.
    isWin(){
        return this.isRow() || this.isCol();
    }

    // Static method
    constructFromArray(){
        
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


module.exports = Board;
