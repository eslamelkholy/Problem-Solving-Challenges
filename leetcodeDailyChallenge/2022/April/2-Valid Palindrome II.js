/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let pointer1 = 0;
  let pointer2 = s.length - 1;

  while (pointer1 < pointer2) {
    if (s[pointer1] !== s[pointer2]) {
      return isPalindrom(s, pointer1, pointer2 - 1) || isPalindrom(s, pointer1 + 1, pointer2);
    }

    pointer1++;
    pointer2--;
  }

  return true;
};

const isPalindrom = function (s, pointer1, pointer2) {
  while (pointer1 < pointer2) {
    if (s[pointer1] !== s[pointer2]) {
      return false;
    }

    pointer1++;
    pointer2--;
  }

  return true;
};

console.log(validPalindrome('aba'));
console.log(validPalindrome('abca'));
console.log(validPalindrome('abc'));
