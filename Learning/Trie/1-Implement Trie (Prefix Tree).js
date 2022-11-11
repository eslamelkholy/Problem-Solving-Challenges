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

    node.isWord = true; // To Indicates that this is a Word
  }
  traverse(word) {
    let node = this.root;
    for (const char of word) {
      node = node[char];
      if (node === undefined) {
        return null;
      }
    }

    return node;
  }
  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    const node = this.traverse(word);

    return node !== null && node.isWord === true;
  }
  /**
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    const node = this.traverse(prefix);
    return node !== null;
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
