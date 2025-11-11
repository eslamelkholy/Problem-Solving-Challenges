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
  searchNode(word) {
    let node = this.trie;

    for (const char of word) {
      if (node[char] === undefined) return false;

      node = node[char];
    }

    return node;
  }
  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    const node = this.searchNode(word);
    return node && node.isWord === true;
  }
  /**
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    const node = this.searchNode(prefix);
    return node && node !== undefined;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
