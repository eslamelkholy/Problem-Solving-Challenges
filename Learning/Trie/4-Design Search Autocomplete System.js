class Trie {
  constructor() {
    this.root = {};
  }

  insert(word, times) {
    let node = this.root;
    for (const char of word) {
      if (node[char] === undefined) {
        node[char] = {};
      }
      node = node[char];
    }
    node.times !== undefined ? (node.times += times) : (node.times = times);
    node.word = word;
  }

  search(word) {
    let node = this.root;
    for (const char of word) {
      if (node[char] === undefined) return null;
      node = node[char];
    }

    return node;
  }
}
/**
 * @param {string[]} sentences
 * @param {number[]} times
 */
class AutocompleteSystem {
  constructor(sentences, times) {
    this.trie = new Trie();
    this.userInput = "";
    this.END_WORD = "#";

    this.initTrie(sentences, times);
  }
  /**
   * @param {character} c
   * @return {string[]}
   */
  input(c) {
    if (c === this.END_WORD) {
      this.trie.insert(this.userInput, 1);
      this.userInput = "";
      return [];
    }
    this.userInput += c;

    const node = this.trie.search(this.userInput);
    if (node === null) return [];

    const result = this.extractWord(node);
    return result;
  }

  initTrie(sentences, times) {
    for (let i = 0; i < sentences.length; i++) {
      this.trie.insert(sentences[i], times[i]);
    }
  }

  extractWord(node) {
    const words = [];
    const stack = [node];
    const result = [];
    while (stack.length > 0) {
      const currentNode = stack.pop();

      if (currentNode.word !== undefined) {
        words.push({ ...currentNode });
      }
      for (const key in currentNode) {
        if (typeof currentNode[key] !== "object") continue;
        stack.push(currentNode[key]);
      }
    }
    words.sort((a, b) => (b.times !== a.times ? b.times - a.times : a.word.localeCompare(b.word)));
    // console.log(words);
    for (let i = 0; i < 3; i++) {
      if (words[i]) {
        result.push(words[i].word);
      }
    }

    return result;
  }
}

// const autocomplete = new AutocompleteSystem(
//   ["i love you", "island", "iroman", "i love leetcode"],
//   [5, 3, 2, 2]
// );

// console.log(autocomplete.input("i"));
// console.log(autocomplete.input(" "));
// console.log(autocomplete.input("a"));
// console.log(autocomplete.input("#"));

const autocomplete2 = new AutocompleteSystem(["i love you", "island", "iroman", "i love leetcode"], [5, 3, 2, 2]);

console.log(autocomplete2.input("i"));
console.log(autocomplete2.input(" "));
console.log(autocomplete2.input("a"));
console.log(autocomplete2.input("#"));
console.log(autocomplete2.input("i"));
console.log(autocomplete2.input(" "));
console.log(autocomplete2.input("a"));
console.log(autocomplete2.input("#"));
console.log(autocomplete2.input("i"));
console.log(autocomplete2.input(" "));
console.log(autocomplete2.input("a"));
console.log(autocomplete2.input("#"));
/**
 * Your AutocompleteSystem object will be instantiated and called as such:
 * var obj = new AutocompleteSystem(sentences, times)
 * var param_1 = obj.input(c)
 */
