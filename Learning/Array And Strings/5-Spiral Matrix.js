/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let rowLen = matrix.length;
  let colLen = matrix[0].length;
  const total = rowLen * colLen;
  const result = [];
  let k = 0;
  let row = 0;
  let col = 0;
  let direction = "right";
  let minCol = 0;
  let minRow = 0;

  while (k < total) {
    result.push(matrix[row][col]);
    if (direction === "right") {
      if (col === colLen - 1) {
        direction = "down";
        row++;
        colLen--;
      } else {
        col++;
      }
    } else if (direction === "down") {
      if (row === rowLen - 1) {
        direction = "left";
        col--;
        rowLen--;
      } else {
        row++;
      }
    } else if (direction === "left") {
      if (col === minCol) {
        row--;
        direction = "up";
        minCol++;
        minRow++;
      } else {
        col--;
      }
    } else if (direction === "up") {
      if (row === minRow) {
        direction = "right";
        col++;
      } else {
        row--;
      }
    }

    k++;
  }
  return result;
};
