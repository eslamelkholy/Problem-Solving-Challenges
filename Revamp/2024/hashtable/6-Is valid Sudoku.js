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
