/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  const result = [];
  let direction = "up";
  let row = 0;
  let col = 0;
  const colLen = mat[0].length;
  const rowLen = mat.length;
  let size = colLen * rowLen;
  let k = 0;

  while (k < size) {
    result.push(mat[row][col]);

    if (direction === "up") {
      if (row === 0 && col < colLen - 1) {
        col++;
        direction = "down";
      } else if (col === colLen - 1) {
        row++;
        direction = "down";
      } else {
        row--;
        col++;
      }
    } else {
      if (col === 0 && row < rowLen - 1) {
        row++;
        direction = "up";
      } else if (row === rowLen - 1) {
        col++;
        direction = "up";
      } else {
        row++;
        col--;
      }
    }
    k++;
  }
  return result;
};

console.log(
  findDiagonalOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
