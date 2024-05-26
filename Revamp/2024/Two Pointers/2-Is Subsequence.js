/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isSubsequence = function (s, t) {
  let right = 0;
  let left = 0;
  while (right < s.length) {
    if (left === t.length) {
      return false;
    }

    if (s[right] === t[left]) {
      right++;
    }

    left++;
  }
  return true;
};
