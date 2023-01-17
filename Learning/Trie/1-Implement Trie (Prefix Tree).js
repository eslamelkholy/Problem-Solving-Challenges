class Trie {
  constructor() {
    this.root = {};
  }
  /**
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let node = this.root;

    for (const char of word) {
      if (node[char] === undefined) {
        node[char] = {};
      }
      node = node[char];
    }
    node.isWord = true;
  }

  traverse(word) {
    let node = this.root;

    for (const char of word) {
      if (node[char] === undefined) {
        return null;
      }
      node = node[char];
    }
    return node.isWord;
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    return this.traverse(word) === true;
  }
  /**
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    return this.traverse(prefix) !== null;
  }
}

const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // return True
console.log(trie.search("app")); // return False
console.log(trie.startsWith("app")); // return True
trie.insert("app");
console.log(trie.search("app")); // return True

console.log(JSON.stringify(trie.root, null, 4));
