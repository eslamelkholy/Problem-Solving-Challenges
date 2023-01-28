class Trie {
  constructor() {
    this.root = {};
  }
  insert(word, val) {
    let node = this.root;
    for (const char of word) {
      if (node[char] === undefined) node[char] = {};

      node = node[char];
    }
    node.val = val;
  }
  traverse(word) {
    let node = this.root;
    for (const char of word) {
      if (node[char] === undefined) return null;

      node = node[char];
    }
    return node;
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
    const prefixVals = this.trie.traverse(prefix);
    const stack = [prefixVals];
    let sumPrefix = 0;

    while (stack.length > 0) {
      const curr = stack.pop();

      if (typeof curr !== "object") {
        sumPrefix += curr;
        continue;
      }

      for (const key in curr) {
        stack.push(curr[key]);
      }
    }
    return sumPrefix;
  }
}
