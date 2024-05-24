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
        return false;
      }

      node = node[char];
    }
    return node;
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    return this.traverse(word).isWord === true;
  }
  /**
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    return this.traverse(prefix);
  }
}
/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

const trie = new Trie();
trie.insert("apple");
// console.log(JSON.stringify(trie.root, null, 4));

console.log(trie.search("apple")); // return True
console.log(trie.search("app")); // return False
console.log(trie.startsWith("app")); // return True
trie.insert("app");
console.log(trie.search("app")); // return True
