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
  if (board[x] === undefined || board[x][y] === undefined) return;

  const currentWord = board[x][y];
  const currentNode = node[currentWord];
  if (currentNode === undefined) return;

  if (currentNode.word) {
    result.push(currentNode.word);
    currentNode.word = undefined;
  }

  board[x][y] = undefined;

  for (const [dx, dy] of DIRS) {
    backtrack(board, x + dx, y + dy, currentNode, result);
  }

  board[x][y] = currentWord;
  node.currentNode = undefined;
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

  const backtrack = (x, y, node) => {
    if (board[x] === undefined || board[x][y] === undefined) return null;

    const currentWord = board[x][y];
    const currentNode = node[currentWord];

    if (currentNode === undefined) return;

    if (currentNode.word) {
      result.push(currentNode.word);
      currentNode.word = undefined;
    }

    board[x][y] = undefined;

    for (const [dx, dy] of DIRS) {
      backtrack(x + dx, y + dy, currentNode);
    }

    board[x][y] = currentWord;
    node.currentNode = undefined;
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      backtrack(i, j, trie.root);
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
