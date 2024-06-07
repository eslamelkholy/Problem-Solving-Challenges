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
    node.word = word;
  }

  search(word) {
    let node = this.root;

    for (const char of word) {
      if (node[char] === undefined) return null;
      if (node[char].isWord === true) return node[char].word;

      node = node[char];
    }

    return null;
  }
}
/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
  const trie = new Trie();
  const sentenceArr = sentence.split(" ");

  for (const word of dictionary) {
    trie.insert(word);
  }

  for (let i = 0; i < sentenceArr.length; i++) {
    const isFound = trie.search(sentenceArr[i]);
    if (isFound) {
      sentenceArr[i] = isFound;
    }
  }

  return sentenceArr.join(" ");
};

console.log(replaceWords((dictionary = ["cat", "bat", "rat"]), (sentence = "the cattle was rattled by the battery")));
