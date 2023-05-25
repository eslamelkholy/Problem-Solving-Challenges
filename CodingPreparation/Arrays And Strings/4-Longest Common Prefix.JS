class Trie {
  constructor() {
    this.trie = {};
    this.max = -1;
    this.maxPrefix = "";
  }

  insert(word) {
    let node = this.trie;
    let prefixChar = "";

    for (const char of word) {
      prefixChar += char;
      if (node[char] === undefined) {
        node[char] = {};
        node[char].count = 0;
        node[char].prefix = prefixChar;
      } else {
        node[char].count++;
        if (node[char].count >= this.max) {
          this.max = node[char].count;
          this.maxPrefix = node[char].prefix;
        }
      }

      node = node[char];
    }

    node.isWord = true;
  }
}

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const trie = new Trie();

  for (const str of strs) {
    trie.insert(str);
  }

  if (Object.keys(trie.trie).length > 1) return "";

  return strs.length === 1 ? strs[0] : trie.maxPrefix;
};

console.log(longestCommonPrefix((strs = ["flower", "flow", "flight"])));
console.log(longestCommonPrefix((strs = ["ab", "a"])));
console.log(longestCommonPrefix((strs = ["a"])));
console.log(longestCommonPrefix((strs = ["reflower", "flow", "flight"])));
