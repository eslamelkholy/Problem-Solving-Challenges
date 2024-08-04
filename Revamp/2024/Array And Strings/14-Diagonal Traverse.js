/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  const result = [];
  const N = mat.length;
  const M = mat[0].length;
  let DIR = "UP";
  let x = 0;
  let y = 0;
  let STEPS = N * M;

  while (STEPS > 0) {
    result.push(mat[x][y]);

    if (DIR === "UP") {
      if (x === 0 && y < M - 1) {
        y++;
        DIR = "DOWN";
      } else if (y === M - 1) {
        x++;
        DIR = "DOWN";
      } else {
        x--;
        y++;
      }
    } else {
      if (y === 0 && x < N - 1) {
        x++;
        DIR = "UP";
      } else if (x === N - 1) {
        y++;
        DIR = "UP";
      } else {
        x++;
        y--;
      }
    }
    STEPS--;
  }

  return result;
};
