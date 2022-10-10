/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  const rowLen = mat.length;
  const colLen = mat[0].length;
  const total = rowLen * colLen;
  const result = [];
  let k = 0;
  let row = 0;
  let col = 0;
  let direction = "up";

  while (k < total) {
    result.push(mat[row][col]);

    if (direction === "up") {
      // Reach Top
      if (row === 0 && col < colLen - 1) {
        col++;
        direction = "down";
        // Reach Top
      } else if (col === colLen - 1) {
        row++;
        direction = "down";
      } else {
        row--;
        col++;
      }
    } else {
      // Reaches Down
      if (col === 0 && row < rowLen - 1) {
        row++;
        direction = "up";
        // Reaches
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
