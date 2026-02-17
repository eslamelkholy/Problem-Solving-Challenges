class Trie {
  constructor() {
    this.trie = {};
  }
  /**
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let node = this.trie;
    for (const char of word) {
      if (node[char] === undefined) {
        node[char] = {};
      }

      node = node[char];
    }
    node.isWord = true;
  }
  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    let node = this.trie;
    for (const char of word) {
      if (node[char] === undefined) return false;

      node = node[char];
    }

    return node.isWord || false;
  }
  /**
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    let node = this.trie;

    for (const char of prefix) {
      if (node[char] === undefined) return false;

      node = node[char];
    }

    return true;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
