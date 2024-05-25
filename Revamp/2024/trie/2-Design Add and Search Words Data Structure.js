var WordDictionary = function () {
  this.root = {};
  this.SKIP_CHAR = ".";
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let node = this.root;
  for (const char of word) {
    if (node[char] === undefined) {
      node[char] = {};
    }

    node = node[char];
  }
  node.isWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word, node = this.root) {
  for (let i = 0; i < word.length; i++) {
    const char = word[i];

    if (char === this.SKIP_CHAR) {
      const nextWord = word.substring(i + 1, word.length);
      for (const key in node) {
        if (this.search(nextWord, node[key])) return true;
      }
    }

    if (node[char] === undefined) return false;

    node = node[char];
  }

  return node.isWord === true;
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
const wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
console.log(wordDictionary.search("pad")); // return False
// wordDictionary.search("bad"); // return True
console.log(wordDictionary.search(".ad")); // return True
console.log(wordDictionary.search("b..")); // return True
