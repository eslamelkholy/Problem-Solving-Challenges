/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub0 = function (s) {
  if (isPalindrom(s)) return 1;
  for (let i = 0; i < s.length; i++) {
    let subSeq = s[i];
    for (let j = i + 1; j < s.length; j++) {
      subSeq += s[j];
      if (isPalindrom(subSeq)) {
        return 2;
      }
    }
  }
  return 1;
};

/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function (s) {
  if (isPalindrom(s)) return 1;

  return 2;
};

const isPalindrom = (s) => {
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[s.length - i - 1]) return false;
  }
  return true;
};

console.log(removePalindromeSub('ababa'));
console.log(removePalindromeSub('baabb'));
console.log(removePalindromeSub('abb'));
