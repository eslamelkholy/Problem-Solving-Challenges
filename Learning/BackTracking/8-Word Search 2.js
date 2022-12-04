class Trie {
  constructor() {
    this.root = {};
  }

  insert(word) {
    let node = this.root;

    for (const char of word) {
      if (node[char] === undefined) {
        node[char] = {};
      }
      node = node[char];
    }

    node.word = word;
  }
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  const result = [];
  const trie = new Trie();

  for (const word of words) {
    trie.insert(word);
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (trie.root[board[i][j]] === undefined) continue;
      backtrack(board, i, j, trie.root, result);
    }
  }
  return result;
};

const DIRS = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

const backtrack = (board, x, y, node, result) => {
  if (board[x] === undefined || board[x][y] === undefined || !node) return null;

  const currentWord = board[x][y];
  board[x][y] = "#";
  node = node[currentWord];

  if (node && node.word) {
    result.push(node.word);
    node.word = null;
  }

  for (const [dx, dy] of DIRS) {
    const word = backtrack(board, x + dx, y + dy, node, result);
    if (word) return word;
  }

  board[x][y] = currentWord;

  return null;
};

console.log(
  findWords(
    [
      ["o", "a", "a", "n"],
      ["e", "t", "a", "e"],
      ["i", "h", "k", "r"],
      ["i", "f", "l", "v"],
    ],
    ["oath", "pea", "eat", "rain"]
  )
);

console.log(
  findWords(
    [
      ["a", "b"],
      ["c", "d"],
    ],
    ["abcb"]
  )
);
