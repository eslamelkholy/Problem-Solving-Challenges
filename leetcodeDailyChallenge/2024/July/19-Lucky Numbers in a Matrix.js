/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  const rowMap = {};
  const colMap = {};
  const N = matrix.length;
  const M = matrix[0].length;
  const result = [];

  for (let i = 0; i < N; i++) {
    let min = Number.MAX_SAFE_INTEGER;
    for (let j = 0; j < M; j++) {
      min = Math.min(min, matrix[i][j]);
    }
    rowMap[i] = min;
  }

  for (let i = 0; i < M; i++) {
    let max = Number.MIN_SAFE_INTEGER;
    for (let j = 0; j < N; j++) {
      max = Math.max(max, matrix[j][i]);
    }

    colMap[i] = max;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      const num = matrix[i][j];
      const minInRow = rowMap[i];
      const maxInCol = colMap[j];
      if (num === minInRow && num === maxInCol) {
        result.push(num);
      }
    }
  }

  return result;
};
