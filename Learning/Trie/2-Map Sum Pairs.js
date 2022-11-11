class MapSum {
  constructor() {
    this.root = {};
    this.map = {};
  }

  insert(word, val) {
    const delta = this.map[word] !== undefined ? -this.map[word] : 0;
    this.map[word] = val;

    let node = this.root;

    for (const char of word) {
      if (node[char] !== undefined) {
        node[char] = { ...node[char], val: node[char].val + delta + val };
      } else {
        node[char] = { val };
      }

      node = node[char];
    }

    node.isWord = true;
  }

  traverse(word) {
    let node = this.root;

    for (const char of word) {
      node = node[char];
      if (node === undefined) return null;
    }

    return node;
  }

  sum(word) {
    const node = this.traverse(word);
    if (node === null) return 0;

    return node.val;
  }
}
