const isPalindromeString = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
};
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let longestPal = s[0];
  const substrPalSet = new Set();
  if (isPalindromeString(s)) return s;

  for (let i = 0; i < s.length; i++) {
    let currentSub = s[i];
    for (let j = i + 1; j < s.length; j++) {
      currentSub += s[j];
      if (isPalindromeString(currentSub)) {
        if (currentSub.length > longestPal.length) longestPal = currentSub;
        substrPalSet.add(currentSub);
      }
    }
  }
  return longestPal;
};

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('ccc'));
console.log(longestPalindrome('bananas')); // "anana"
