/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const words = s.split(" ");
  const wordMap = {};
  const wordSet = new Set();

  if (pattern.length > words.length) return false;

  for (let i = 0; i < words.length; i++) {
    const currentPattern = pattern[i];

    if (wordMap[currentPattern] !== undefined && wordMap[currentPattern] !== words[i]) {
      return false;
    }
    if (wordSet.has(words[i]) && wordMap[currentPattern] === undefined) return false;

    if (wordMap[currentPattern] === undefined) {
      wordMap[currentPattern] = words[i];
      wordSet.add(words[i]);
    }
  }

  return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));

console.log(wordPattern("abba", "dog dog dog dog")); // false

console.log(wordPattern("abba", "dog cat cat fish")); // false
console.log(wordPattern("aaaa", "dog cat cat dog")); // false
console.log(wordPattern("jquery", "jquery")); // false
