/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (isPalindrom(s)) return s;
  let result = s[0];

  for (let i = 0; i < s.length; i++) {
    let str = s[i];
    for (let j = i + 1; j < s.length; j++) {
      str += s[j];
      if (isPalindrom(str) && str.length > result.length) {
        result = str;
      }
    }
  }
  return result;
};

const isPalindrom = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
};
