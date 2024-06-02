/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let p = s.length;
  let result = 0;

  while (p > 0) {
    p--;

    if (s[p] !== " ") {
      result++;
    } else if (result > 0) {
      return result; // Already found last word length
    }
  }

  return result;
};
