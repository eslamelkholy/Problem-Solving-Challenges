/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const dp = new Array(s.length + 1).fill(false);
  dp[s.length] = true;

  for (let i = s.length - 1; i >= 0; i--) {
    for (let word of wordDict) {
      if (i + word.length <= s.length && s.slice(i, i + word.length) === word) {
        dp[i] = dp[i + word.length];
        if (dp[i]) break;
      }
    }
  }
  return dp[0];
};

console.log(wordBreak('leetcode', ['leet', 'code'])); // T
console.log(wordBreak('applepenapple', ['apple', 'pen'])); // T
console.log(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat'])); // F
