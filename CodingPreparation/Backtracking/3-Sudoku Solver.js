const SKIPPED_CHAR = ".";
const BOARD_LENGTH = 9;
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  return backtrack(board);
};

const backtrack = (board) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i][j].length; j++) {
      if (board[i][j] !== SKIPPED_CHAR) continue;

      for (let k = 1; k <= BOARD_LENGTH; k++) {
        if (isNumberValid(i, j, k, board)) {
          board[i][j] = k;

          if (backtrack(board)) return true;
          board[i][j] = SKIPPED_CHAR;
        }
      }

      return false;
    }
  }

  return true;
};

const isNumberValid = (row, col, number, board) => {
  const rowDiff = Math.floor(row / 3) * 3;
  const colDiff = Math.floor(col / 3) * 3;

  for (let i = 0; i < BOARD_LENGTH; i++) {
    if (board[row][i] === number) return false;
    if (board[i][col] === number) return false;

    if (board[rowDiff + Math.floor(i / 3)][colDiff + (i % 3)] === number) return false; // 3x3 Block
  }
};

console.log(
  solveSudoku(
    (board = [
      ["5", "3", ".", ".", "7", ".", ".", ".", "."],
      ["6", ".", ".", "1", "9", "5", ".", ".", "."],
      [".", "9", "8", ".", ".", ".", ".", "6", "."],
      ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
      ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
      ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
      [".", "6", ".", ".", ".", ".", "2", "8", "."],
      [".", ".", ".", "4", "1", "9", ".", ".", "5"],
      [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ])
  )
);
