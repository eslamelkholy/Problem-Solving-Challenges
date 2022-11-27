/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (backtrack(board, i, j, word, 0)) {
        return true;
      }
    }
  }

  return false;
};

const dirs = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
];

const backtrack = (board, x, y, word, currentIndex) => {
  if (board[x] === undefined || board[x][y] === undefined || board[x][y] !== word[currentIndex]) return false;

  if (currentIndex === word.length - 1) return true; // Reached the last Index

  board[x][y] = "#"; // Mark as Visited (Like Push Go Forward Technique)

  for (const [dx, dy] of dirs) {
    const i = x + dx;
    const j = y + dy;

    if (backtrack(board, i, j, word, currentIndex + 1)) return true;
  }

  board[x][y] = word[currentIndex]; // Reset Mark (Like Pop Again go Back)
  return false;
};

// Time Complexity O (N * 3 ^ L)

// N is Numbers of Cells
// L Is the Length Of Word
// 3 Since we have 4 Directions but the current Direction we won't go Back Again to it

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
);

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCB"
  )
);
