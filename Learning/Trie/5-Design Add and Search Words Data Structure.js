class Trie {
  constructor() {
    this.root = {};
    this.SKIP_CHAR = ".";
  }

  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (node[char] === undefined) node[char] = {};

      node = node[char];
    }
    node.isWord = true;
  }
  search(word, node = this.root) {
    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (char === this.SKIP_CHAR) {
        const nextChar = word.substring(i + 1, word.length);
        for (const key in node) {
          if (this.search(nextChar, node[key])) return true;
        }
      }

      if (node[char] === undefined) return null;

      node = node[char];
    }

    return node.isWord;
  }
}

class WordDictionary {
  constructor() {
    this.trie = new Trie();
  }
  /**
   * @param {string} word
   * @return {void}
   */
  addWord(word) {
    this.trie.insert(word);
  }
  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    return this.trie.search(word) === true;
  }
}

const wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // return False
wordDictionary.search("bad"); // return True
wordDictionary.search(".ad"); // return True
wordDictionary.search("b.."); // return True
