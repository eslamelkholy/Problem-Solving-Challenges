const SKIP_CHAR = ".";
const BOARD_LENGTH = 9;
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  return backtrack(board);
};

const backtrack = (board) => {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] !== SKIP_CHAR) continue;

      for (let i = 1; i <= BOARD_LENGTH; i++) {
        if (!isValidNumber(row, col, i + "", board)) continue;

        board[row][col] = i + "";

        if (backtrack(board)) return true;

        board[row][col] = SKIP_CHAR;
      }
      return false;
    }
  }

  return true;
};

const isValidNumber = (row, col, number, board) => {
  const rowDiff = Math.floor(row / 3) * 3;
  const colDiff = Math.floor(col / 3) * 3;

  for (let i = 0; i < BOARD_LENGTH; i++) {
    if (board[row][i] === number) return false;
    if (board[i][col] === number) return false;

    if (board[rowDiff + Math.floor(i / 3)][colDiff + Math.floor(i % 3)] === number) return false;
  }
  return true;
};
