/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  const m = s1.length;
  const n = s2.length;
  if (s3.length != m + n) return false;
  const dp = Array.from(Array(m + 1), () => new Array(n + 1));
  dp[0][0] = 1;
  for (let i = 1; i <= m; i++) dp[i][0] = s3[i - 1] == s1[i - 1] && dp[i - 1][0];

  for (let j = 1; j <= n; j++) dp[0][j] = s3[j - 1] == s2[j - 1] && dp[0][j - 1];

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const t1 = s3[i + j - 1] == s1[i - 1] && dp[i - 1][j];
      const t2 = s3[i + j - 1] == s2[j - 1] && dp[i][j - 1];
      dp[i][j] = t1 || t2;
    }
  }

  return dp[m][n];
};
console.log(isInterleave('aabcc', 'dbbca', 'aadbbcbcac'));
console.log(isInterleave('aabcc', 'dbbca', 'aadbbbaccc'));
console.log(isInterleave('', '', ''));
