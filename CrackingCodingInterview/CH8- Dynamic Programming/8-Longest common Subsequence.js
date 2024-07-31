/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  let N = text1.length;
  let M = text2.length;

  const dp = new Array(N + 1).fill(0).map(() => new Array(M + 1).fill(0));

  for (let i = N - 1; i >= 0; i--) {
    for (let j = M - 1; j >= 0; j--) {
      if (text2[j] === text1[i]) {
        dp[i][j] = 1 + dp[i + 1][j + 1];
      } else {
        dp[i][j] = Math.max(dp[i][j + 1], dp[i + 1][j]);
      }
    }
  }

  return dp[0][0];
};

console.log(longestCommonSubsequence((text1 = "abcde"), (text2 = "ace")));
// console.log(longestCommonSubsequence((text1 = "abc"), (text2 = "abc")));
// console.log(longestCommonSubsequence((text1 = "abc"), (text2 = "def")));
