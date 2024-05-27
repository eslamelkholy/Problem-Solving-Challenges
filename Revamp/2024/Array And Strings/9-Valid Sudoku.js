/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rows = [];
  const cols = [];
  const boxes = [];

  for (let i = 0; i < 9; i++) {
    rows[i] = new Set();
    cols[i] = new Set();
    boxes[i] = new Set();
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const cell = board[i][j];
      if (cell === ".") continue;

      if (rows[i].has(cell)) {
        return false;
      } else {
        rows[i].add(cell);
      }

      if (cols[j].has(cell)) {
        return false;
      } else {
        cols[j].add(cell);
      }

      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      if (boxes[boxIndex].has(cell)) {
        return false;
      } else {
        boxes[boxIndex].add(cell);
      }
    }
  }

  return true;
};

console.log(
  isValidSudoku(
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
