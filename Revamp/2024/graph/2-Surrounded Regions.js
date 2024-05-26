/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const isOnBorder = i === 0 || j === 0 || i === board.length - 1 || j === board[0].length - 1;
      if (board[i][j] === "O" && isOnBorder) {
        dfs(i, j, board);
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "visited") {
        board[i][j] = "O";
      } else {
        board[i][j] = "X";
      }
    }
  }
};

const dfs = (x, y, board) => {
  if (board[x] === undefined || board[x][y] === undefined || board[x][y] === "visited" || board[x][y] === "X") return;

  board[x][y] = "visited";

  for (const [dx, dy] of DIRS) {
    dfs(x + dx, y + dy, board);
  }
};

const DIRS = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

// console.log(
//   solve(
//     (board = [
//       ["O", "O"],
//       ["O", "O"],
//     ])
//   )
// );

// console.log(
//   solve(
//     (board = [
//       ["O", "O", "O"],
//       ["O", "O", "O"],
//       ["O", "O", "O"],
//     ])
//   )
// );

console.log(
  solve([
    ["X", "O", "X"],
    ["X", "O", "X"],
    ["X", "O", "X"],
  ])
);
