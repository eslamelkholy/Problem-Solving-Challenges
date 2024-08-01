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

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let result = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " " && result !== 0) {
      return result;
    }

    if (s[i] !== " ") result++;
  }

  return result;
};
