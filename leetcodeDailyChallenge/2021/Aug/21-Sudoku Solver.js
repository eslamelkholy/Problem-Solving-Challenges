/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

var solveSudoku = function (board) {
  const solve = () => {
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[row].length; col++) {
        if (board[row][col] === '.') {
          for (let i = 1; i <= 9; i++) {
            if (isNumberAvailable(row, col, i + '')) {
              board[row][col] = i + '';
              if (solve(board)) return true;

              board[row][col] = '.';
            }
          }
          return false;
        }
      }
    }
    return true;
  };

  const isNumberAvailable = (row, col, val) => {
    let rowDiff = Math.floor(row / 3) * 3;
    let colDiff = Math.floor(col / 3) * 3;

    for (let i = 0; i < board.length; i++) {
      if (board[row][i] === val) return false; // Check if Col Available
      if (board[i][col] === val) return false; // check if row Available
      if (board[rowDiff + Math.floor(i / 3)][colDiff + (i % 3)] === val) return false; // 3x3 Block
    }
    return true;
  };
  solve();
};

solveSudoku([
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]);
