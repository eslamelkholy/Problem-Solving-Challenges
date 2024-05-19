/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (backtrack(i, j, word, board, 0)) return true;
    }
  }

  return false;
};

const backtrack = (row, col, word, board, currentIndex) => {
  if (board[row] === undefined || board[row][col] === undefined || word[currentIndex] !== board[row][col]) return false;

  if (currentIndex === word.length - 1) return true;

  // Mark as visited
  board[row][col] = "#";

  for (const [dx, dy] of DIRS) {
    const i = row + dx;
    const j = col + dy;

    if (backtrack(i, j, word, board, currentIndex + 1)) return true;
  }

  board[row][col] = word[currentIndex];
  return false;
};

const DIRS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
