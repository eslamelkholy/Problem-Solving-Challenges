/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
  let rows = [];
  let columns = [];
  let boxes = [];
  for (let i = 0; i < 9; i++) {
    rows.push([]);
    columns.push([]);
    boxes.push([]);
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      let cell = board[i][j];

      if (cell !== '.') {
        if (rows[i].includes(cell)) {
          return false;
        } else rows[i].push(cell);

        if (columns[j].includes(cell)) {
          return false;
        } else columns[j].push(cell);

        let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

        if (boxes[boxIndex].includes(cell)) {
          return false;
        } else boxes[boxIndex].push(cell);
      }
    }
  }

  return true;
}
console.log(
  isValidSudoku([
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
);
