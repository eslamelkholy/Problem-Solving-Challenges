/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  return backtrack(0, n, new Set(), new Set(), new Set());
};

const backtrack = (row, n, cols, diagonals, antiDiagonals) => {
  if (row === n) return 1;

  let solutions = 0;

  for (let col = 0; col < n; col++) {
    const currentDiagonal = row - col;
    const currentAntiDiagonal = row + col;

    if (cols.has(col) || diagonals.has(currentDiagonal) || antiDiagonals.has(currentAntiDiagonal)) continue;

    cols.add(col);
    diagonals.add(currentDiagonal);
    antiDiagonals.add(currentAntiDiagonal);

    solutions += backtrack(row + 1, n, cols, diagonals, antiDiagonals);

    cols.delete(col);
    diagonals.delete(currentDiagonal);
    antiDiagonals.delete(currentAntiDiagonal);
  }

  return solutions;
};
