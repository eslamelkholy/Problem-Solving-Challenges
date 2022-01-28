class WordDictionary {
  constructor() {
    this.isWord = false;
    this.root = new Map();
  }

  addWord(word) {
    let cur = this;
    for (let c of word) {
      if (!cur.root.has(c)) cur.root.set(c, new WordDictionary());
      cur = cur.root.get(c);
    }
    cur.isWord = true;
  }

  search(word) {
    const helper = (i = 0, curr = this) => {
      if (word[i] === '.') {
        let found = false;
        curr.root.forEach((node) => {
          if (helper(i + 1, node)) found = true;
        });
        return found;
      }
      return (
        (i === word.length && (curr.isWord || word[i] === '.')) ||
        (curr.root.has(word[i]) && helper(i + 1, curr.root.get(word[i])))
      );
    };
    return helper();
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
