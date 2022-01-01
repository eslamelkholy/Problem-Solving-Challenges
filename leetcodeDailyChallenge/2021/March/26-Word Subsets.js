/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */
var wordSubsets = function (A, B) {
  const result = [];
  const elementOfB = {};
  for (const str of B) {
    const currentStr = {};
    for (const char of str)
      if (char in currentStr) currentStr[char]++;
      else currentStr[char] = 1;

    for (const char in currentStr)
      if (!elementOfB[char] || currentStr[char] > elementOfB[char]) elementOfB[char] = currentStr[char];
  }
  for (const word of A) {
    const elementOfA = {};
    let isEqual = true;
    for (const char of word) {
      if (!elementOfB[char]) continue;
      if (char in elementOfA) elementOfA[char]++;
      else elementOfA[char] = 1;
    }
    for (const element in elementOfB)
      if (!elementOfA[element] || elementOfA[element] < elementOfB[element]) {
        isEqual = false;
        break;
      }

    if (isEqual) result.push(word);
  }
  return result;
};

// console.log(wordSubsets(['amazon', 'apple', 'facebook', 'google', 'leetcode'], ['e', 'o']));
// console.log(wordSubsets(['amazon', 'apple', 'facebook', 'google', 'leetcode'], ['l', 'e']));
// console.log(wordSubsets(['amazon', 'apple', 'facebook', 'google', 'leetcode'], ['e', 'oo']));  // ["facebook","google"]
console.log(wordSubsets(['amazon', 'apple', 'facebook', 'google', 'leetcode'], ['lo', 'eo'])); // ["google","leetcode"]
// console.log(wordSubsets(['amazon', 'apple', 'facebook', 'google', 'leetcode'], ['ec', 'oc', 'ceo']));
