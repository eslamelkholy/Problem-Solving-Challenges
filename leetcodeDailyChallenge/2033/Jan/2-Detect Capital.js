/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  if (word === word.toUpperCase() || word === word.toLowerCase()) {
    return true;
  }

  const restWord = word.substring(1, word.length);
  if (word[0] === word[0].toUpperCase() && restWord === restWord.toLowerCase()) {
    return true;
  }

  return false;
};
