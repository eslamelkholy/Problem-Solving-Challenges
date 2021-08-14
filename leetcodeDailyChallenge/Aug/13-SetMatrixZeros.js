/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const rows = new Set();
  const cols = new Set();
  for (let i = 0; i < matrix.length; i++)
    for (let j = 0; j < matrix[i].length; j++)
      if (matrix[i][j] === 0) {
        rows.add(i);
        cols.add(j);
      }

  for (const row of rows) matrix[row].fill(0);

  for (const col of cols) for (let i = 0; i < matrix.length; i++) matrix[i][col] = 0;
};

console.log(
  setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);
