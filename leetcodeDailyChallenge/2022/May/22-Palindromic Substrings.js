/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let palindromCounter = 0;
  for (let i = 0; i < s.length; i++) {
    let str = s[i];
    palindromCounter++;
    for (let j = i+1; j < s.length; j++) {
      str += s[j];
      if(isPalindrome(str)) {
        palindromCounter++;
      }
    }    
  }    
  return palindromCounter;
};
const isPalindrome = (item) => {
  const N = item.length;
  for (let i = 0; i < N; i++) {
    if (item[i] !== item[N - 1 - i]) return false;
  }
  return true;
};
