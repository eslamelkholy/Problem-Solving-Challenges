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
      backtrack(board, trie.root, result, i, j);
    }
  }

  return result;
};

const backtrack = (board, node, result, x, y) => {
  if (board[x] === undefined || board[x][y] === undefined) return null;

  const currentWord = board[x][y];
  const currentNode = node[currentWord];
  if (currentNode === undefined) return null;

  if (currentNode.word) {
    result.push(currentNode.word);
    currentNode.word = undefined;
  }

  board[x][y] = undefined;

  for (const [dx, dy] of DIRS) {
    const i = x + dx;
    const j = y + dy;

    backtrack(board, currentNode, result, i, j);
  }

  board[x][y] = currentWord;
  return null;
};

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

const DIRS = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
console.log(
  findWords(
    (board = [
      ["o", "a", "a", "n"],
      ["e", "t", "a", "e"],
      ["i", "h", "k", "r"],
      ["i", "f", "l", "v"],
    ]),
    (words = ["oath", "pea", "eat", "rain"])
  )
);

console.log(findWords([["a", "a"]], ["aaa"]));
