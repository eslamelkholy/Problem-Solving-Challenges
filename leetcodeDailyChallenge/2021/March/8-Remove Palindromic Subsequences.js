/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function (s) {
  if (s.length === 0) return 0;
  for (let i = 0; i < s.length - 1; i++) if (s[i] !== s[s.length - 1 - i]) return 2;
  return 1;
};

// console.log(removePalindromeSub('ababa'));
console.log(removePalindromeSub('abb'));
