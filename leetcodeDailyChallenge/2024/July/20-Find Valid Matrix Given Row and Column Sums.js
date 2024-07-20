/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function (rowSum, colSum) {
  const N = rowSum.length;
  const M = colSum.length;
  const mat = Array.from({ length: N }, () => Array(M).fill(0));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      mat[i][j] = Math.min(rowSum[i], colSum[j]);
      rowSum[i] -= mat[i][j];
      colSum[j] -= mat[i][j];
    }
  }

  return mat;
};
