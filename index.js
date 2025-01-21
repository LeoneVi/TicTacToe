const prompt = require('prompt-sync')();
const Board = require('./Board');
const Game = require('./Game');


let isWin = false;
console.log('Welcome to TicTacToe. You are X, choose a square');
let size = parseInt(prompt('What sized board would you like? '));
let board = new Board(size, size);
let game = new Game(board);

play = "";

while (!isWin) {
    console.log(' ');
    //game.generateMove();
    board.displayBoard();

    console.log(' ');
    let play = (prompt('Make a move: '));

    if (play === "quit") {
        console.log("Opponent wins.");
        break;
    }

    play = parseInt(play);

    if (!board.isInside(play)) {
        console.log('Out of bounds, please try again.');
    } else {
        if (board.isTaken(play)) {
            console.log("Spot is taken, please try again.");
            console.log(' ');
        } else {
            board.makeMove(play);

            if (board.isWin()) {
                board.displayBoard();
                console.log("Congratulations, you won!");
                isWin = true; // Game ends
            }
        }
    }

}
