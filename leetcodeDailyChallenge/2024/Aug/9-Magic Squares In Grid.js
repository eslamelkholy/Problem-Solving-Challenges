/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function (grid) {
  const N = grid.length;
  const M = grid[0].length;
  let magicSum = 0;

  for (let i = 0; i < N - 2; i++) {
    for (let j = 0; j < M - 2; j++) {
      const magicSquare = [
        grid[i][j],
        grid[i][j + 1],
        grid[i][j + 2],
        grid[i + 1][j],
        grid[i + 1][j + 1],
        grid[i + 1][j + 2],
        grid[i + 2][j],
        grid[i + 2][j + 1],
        grid[i + 2][j + 2],
      ];
      const gridSet = new Set(magicSquare);

      if (gridSet.size < 9) continue;
      if (magicSquare.some((val) => val > 9 || val < 1)) continue;

      const row1 = magicSquare.slice(0, 3).reduce((a, b) => a + b, 0);
      const row2 = magicSquare.slice(3, 6).reduce((a, b) => a + b, 0);
      const row3 = magicSquare.slice(6, 9).reduce((a, b) => a + b, 0);

      const col1 = grid[i][j] + grid[i + 1][j] + grid[i + 2][j];
      const col2 = grid[i][j + 1] + grid[i + 1][j + 1] + grid[i + 2][j + 1];
      const col3 = grid[i][j + 2] + grid[i + 1][j + 2] + grid[i + 2][j + 2];

      const diagonalSum = grid[i][j] + grid[i + 1][j + 1] + grid[i + 2][j + 2];
      const antiDiagonalSum = grid[i][j + 2] + grid[i + 1][j + 1] + grid[i + 2][j];

      if (!(row1 === row2 && row1 === row3)) continue;
      if (!(col1 === col2 && col1 === col3)) continue;
      if (diagonalSum !== antiDiagonalSum) continue;

      magicSum++;
    }
  }

  return magicSum;
};
