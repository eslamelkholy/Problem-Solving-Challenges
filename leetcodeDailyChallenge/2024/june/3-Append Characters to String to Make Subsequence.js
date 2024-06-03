/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function (s, t) {
  let first = 0;
  let longestPrefix = 0;

  while (first < s.length && longestPrefix < t.length) {
    if (s[first] === t[longestPrefix]) {
      longestPrefix++;
    }

    first++;
  }

  return t.length - longestPrefix;
};
