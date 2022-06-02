/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  const ROW = matrix.length;
  const COL = matrix[0].length;
  const result = [];

  for (let i = 0; i < COL; i++) {
    const currentCol = [];
    for (let j = 0; j < ROW; j++) {
      currentCol.push(matrix[j][i]);
    }
    result.push(currentCol);
  }
  return result;
};

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
