/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (backtrack(board, word, i, j, 0)) return true;
    }
  }

  return false;
};

const backtrack = (board, word, x, y, index) => {
  if (board[x] === undefined || board[x][y] === undefined || word[index] !== board[x][y]) return false;

  // Here is the base case reached the word
  if (index === word.length - 1) return true;

  // Mark as visited
  board[x][y] = "#";

  for (const [dx, dy] of DIRS) {
    const i = x + dx;
    const j = y + dy;
    if (backtrack(board, word, i, j, index + 1)) return true;
  }

  board[x][y] = word[index];
  return false;
};

const DIRS = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

console.log(
  exist(
    (board = [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ]),
    (word = "ABCCED")
  )
);

console.log(
  exist(
    (board = [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ]),
    (word = "ABCB")
  )
);
