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

// Leetcode: https://leetcode.com/problems/rotate-image/
