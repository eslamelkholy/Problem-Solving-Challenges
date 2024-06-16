/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let copyMatrix = [...matrix];

  for (let i = 0; i < matrix.length; i++) {
    let cols = [];

    for (let j = matrix[0].length - 1; j >= 0; j--) {
      cols.push(copyMatrix[j][i]);
    }

    matrix[i] = [...cols];
  }

  return matrix;
};

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let n = matrix.length;

  for (var i = 0; i < Math.floor((n + 1) / 2); i++) {
    for (var j = 0; j < Math.floor(n / 2); j++) {
      const temp = matrix[n - 1 - j][i];
      matrix[n - 1 - j][i] = matrix[n - 1 - i][n - j - 1];
      matrix[n - 1 - i][n - j - 1] = matrix[j][n - 1 - i];
      matrix[j][n - 1 - i] = matrix[i][j];
      matrix[i][j] = temp;
    }
  }
};

// Leetcode: https://leetcode.com/problems/rotate-image/
