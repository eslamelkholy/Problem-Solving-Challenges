/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  const N = matrix.length;
  const M = matrix[0].length;
  const dp = new Array(N + 1).fill(0).map(() => new Array(M + 1).fill(0));
  let maxSquare = 0;

  for (let i = 1; i < N + 1; i++) {
    for (let j = 1; j < M + 1; j++) {
      if (matrix[i - 1][j - 1] === "0") continue;

      dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1;

      maxSquare = Math.max(maxSquare, dp[i][j]);
    }
  }

  return Math.pow(maxSquare, 2);
};
