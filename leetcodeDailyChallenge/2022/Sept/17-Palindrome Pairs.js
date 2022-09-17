/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function (words) {
  const result = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (isPalindrom(words[i] + words[j]) && i !== j) {
        result.push([i, j]);
      }
    }
  }
  return result;
};

const isPalindrom = (word) => {
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[word.length - i - 1]) return false;
  }
  return true;
};

/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function (words) {
  const result = [];
  const memo = new Map();

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i === j) continue;
      const word = words[i] + words[j];

      if (!memo.has(word)) {
        memo.set(word, isPalindrom(word));
      }

      if (memo.get(word)) {
        result.push([i, j]);
      }
    }
  }
  return result;
};

const isPalindrom = (word) => {
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[word.length - i - 1]) return false;
  }
  return true;
};
