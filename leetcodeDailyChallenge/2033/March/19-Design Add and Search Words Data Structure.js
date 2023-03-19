class Trie {
  constructor() {
    this.root = {};
    this.SKIP_CHAR = ".";
  }

  /**
   *
   * @param {string} word
   */
  Insert(word) {
    let node = this.root;
    for (const char of word) {
      if (node[char] === undefined) {
        node[char] = {};
      }

      node = node[char];
    }
    node.isWord = true;
  }

  /**
   *
   * @param {string} word
   */
  traverse(word, node = this.root) {
    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (char === this.SKIP_CHAR) {
        const nextChar = word.substring(i + 1, word.length); // Get Next Char

        for (const key in node) {
          if (this.traverse(nextChar, node[key])) return true; // Check if already Exists next Char or Not
        }
      }

      if (node[char] === undefined) return null;

      node = node[char];
    }

    return node.isWord;
  }
}

class WordDictionary {
  constructor() {
    this.trie = new Trie();
  }
  /**
   * @param {string} word
   * @return {void}
   */
  addWord(word) {
    this.trie.insert(word);
  }
  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    return this.trie.search(word) === true;
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
