class Trie {
  constructor() {
    this.root = {};
  }

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

  lookup(word) {
    let node = this.root;
    for (const char of word) {
      if (node[char] === undefined) return undefined;

      node = node[char];
    }

    return node;
  }

  search(word) {
    const node = this.lookup(word);

    return node !== undefined && node.isWord === true;
  }

  startsWith(word) {
    const node = this.lookup(word);

    return node !== undefined;
  }
}

const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // return True
console.log(trie.search("app")); // return False
console.log(trie.startsWith("app")); // return True
trie.insert("app");
console.log(trie.search("app")); // return True
