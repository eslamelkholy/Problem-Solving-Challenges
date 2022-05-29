/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  let result = 0;
  const wordMap = {};
  for (const word of words) {
    wordMap[word] = new Set(word);
  }

  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      const word1 = words[i];
      const word2 = words[j];
      const setWord1 = wordMap[word1];
      let hasCommon = false;
      for (const char of word2) {
        if (setWord1.has(char)) {
          hasCommon = true;
          break;
        }
      }
      if (!hasCommon) {
        result = Math.max(result, word1.length * word2.length);
      }
    }
  }

  return result;
};

console.log(maxProduct(['abcw', 'baz', 'foo', 'bar', 'xtfn', 'abcdef']));
console.log(maxProduct(['a', 'ab', 'abc', 'd', 'cd', 'bcd', 'abcd']));
console.log(maxProduct(['a', 'aa', 'aaa', 'aaaa']));
