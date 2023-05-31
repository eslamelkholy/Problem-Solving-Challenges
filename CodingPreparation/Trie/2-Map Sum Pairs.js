class Trie {
  constructor() {
    this.root = {};
    this.map = new Map();
  }

  insert(word, val) {
    let node = this.root;
    const delta = val - (this.map.get(word) || 0);

    this.map.set(word, val);

    for (const char of word) {
      if (node[char] === undefined) {
        node[char] = { val: delta };
      } else {
        node[char].val += delta;
      }

      node = node[char];
    }
  }

  startsWith(word) {
    let node = this.root;

    for (const char of word) {
      if (node[char] === undefined) return 0;

      node = node[char];
    }

    return node.val;
  }
}
class MapSum {
  constructor() {
    this.trie = new Trie();
  }
  /**
   * @param {string} key
   * @param {number} val
   * @return {void}
   */
  insert(key, val) {
    this.trie.insert(key, val);
  }
  /**
   * @param {string} prefix
   * @return {number}
   */
  sum(prefix) {
    return this.trie.startsWith(prefix);
  }
}

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */

const mapSum = new MapSum();
mapSum.insert("apple", 3);
console.log(mapSum.sum("ap")); // return 3 (apple = 3)
mapSum.insert("app", 2);
mapSum.insert("apple", 2);
console.log(mapSum.sum("ap")); // return 5 (apple + app = 3 + 2 = 5)
