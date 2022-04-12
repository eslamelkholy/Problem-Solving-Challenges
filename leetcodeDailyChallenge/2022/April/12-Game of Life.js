/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let cell = board[i][j];
      let neighbors = getNeighbors(i, j, board);
      if (cell == 0 && neighbors == 3) {
        board[i][j] = 2;
      }
      if (cell == 1 && (neighbors < 2 || neighbors > 3)) {
        board[i][j] = -1;
      }
    }
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] == -1) board[i][j] = 0;
      if (board[i][j] == 2) board[i][j] = 1;
    }
  }
};

var getNeighbors = function (r, c, board) {
  let radius = [-1, 0, +1],
    count = 0;
  for (let i = 0; i < radius.length; i++) {
    for (let j = 0; j < radius.length; j++) {
      if (!(radius[i] == 0 && radius[j] == 0) && board[r + radius[i]] != null) {
        let neighbor = board[r + radius[i]][c + radius[j]];
        if (Math.abs(neighbor) == 1) count += 1;
      }
    }
  }
  return count;
};

console.log(
  gameOfLife([
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ])
);
