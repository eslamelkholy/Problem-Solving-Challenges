/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  const N = mat.length;
  const M = mat[0].length;
  const result = [];
  let DIR = 'UP';
  let currentRow = 0;
  let currentCol = 0;

  let length = N * M;

  while (length > 0) {
    result.push(mat[currentRow][currentCol]);
    if (DIR === 'UP') {
      if (currentRow === 0 && currentCol < M - 1) {
        currentCol++;
        DIR = 'DOWN';
      } else if (currentCol === M - 1) {
        currentRow++;
        DIR = 'DOWN';
      } else {
        currentRow--;
        currentCol++;
      }
    } else {
      if (currentCol === 0 && currentRow < N - 1) {
        currentRow++;
        DIR = 'UP';
      } else if (currentRow === N - 1) {
        currentCol++;
        DIR = 'UP';
      } else {
        currentRow++;
        currentCol--;
      }
    }
    length--;
  }

  return result;
};
