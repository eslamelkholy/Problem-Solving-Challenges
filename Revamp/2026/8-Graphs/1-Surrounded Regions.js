/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const N = board.length;
  const M = board[0].length;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      const isOnBoard = i === 0 || j === 0 || i === N - 1 || j === M - 1;
      if (board[i][j] === 'O' && isOnBoard) {
        markAsVisited(board, i, j);
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === 'visited') {
        board[i][j] = 'O';
      } else {
        board[i][j] = 'X';
      }
    }
  }
};

const markAsVisited = (board, x, y) => {
  if (
    board[x] === undefined ||
    board[x][y] === undefined ||
    board[x][y] === 'X' ||
    board[x][y] === 'visited'
  )
    return;

  board[x][y] = 'visited';

  for (const [dx, dy] of DIRS) {
    markAsVisited(board, x + dx, y + dy);
  }
};

const DIRS = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
