/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  let str1 = "";
  let str2 = "";
  for (const char of word1) str1 += char;

  for (const char of word2) str2 += char;

  return str1 === str2;
};

/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = (word1, word2) => word1.join("") === word2.join("");
