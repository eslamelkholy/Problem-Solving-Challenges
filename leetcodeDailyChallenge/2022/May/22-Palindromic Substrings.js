/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings0 = function (s) {
  let palindromCounter = 0;
  for (let i = 0; i < s.length; i++) {
    let str = s[i];
    palindromCounter++;
    for (let j = i + 1; j < s.length; j++) {
      str += s[j];
      if (isPalindrome(str)) {
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

/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = (s) => {
  const dp = new Array(s.length).fill(0).map(() => new Array(s.length).fill(0));
  let count = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    dp[i][i] = 1;
    count++;

    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        if (i + 1 > j - 1 || dp[i + 1][j - 1] === 1) {
          dp[i][j] = 1;
          count++;
        }
      }
    }
  }

  return count;
};
