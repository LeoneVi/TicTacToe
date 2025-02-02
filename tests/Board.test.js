import { Board } from '../Board';
import assert from "assert";


describe("playToRowCol", () => {
    it("If user sets their play as the third square on a 3x3, playToRowCol should return [0,2]", () => {
        let board = new Board(3, 3);
        const play = 3
        const [rowNum, colNum] = board.playToRowCol(play);
        assert(rowNum === 0 && colNum === 2);
    });

    it("If user sets their play as the center of a 5x5 board, playToRowCol should return [0,2]", () => {
        let board = new Board(5, 5);
        const play = 13
        const [rowNum, colNum] = board.playToRowCol(play);
        assert(rowNum === 2 && colNum === 2);
    });
});