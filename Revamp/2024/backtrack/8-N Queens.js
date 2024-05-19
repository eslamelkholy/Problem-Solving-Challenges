/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const solution = [];
  const emptyBoard = Array.from({ length: n }, () => Array(n).fill("."));

  const createBoard = (state) => {
    const board = [];
    for (let row = 0; row < n; row++) {
      board.push(state[row].join(""));
    }
    return board;
  };

  const backtrack = (row, cols, diagonals, antiDiagonals, state) => {
    // Base case - N queens have been placed
    if (row === n) {
      return solution.push(createBoard(state));
    }

    for (let col = 0; col < n; col++) {
      const currDiagonal = row - col;
      const currAntiDiagonal = row + col;
      if (cols.has(col) || diagonals.has(currDiagonal) || antiDiagonals.has(currAntiDiagonal)) continue;

      cols.add(col);
      diagonals.add(currDiagonal);
      antiDiagonals.add(currAntiDiagonal);
      state[row][col] = "Q"; // "Add" the queen to the board

      // Move on to the next row with the updated board state
      backtrack(row + 1, cols, diagonals, antiDiagonals, state);

      // explored all valid paths using the above function call
      cols.delete(col);
      diagonals.delete(currDiagonal);
      antiDiagonals.delete(currAntiDiagonal);
      state[row][col] = ".";
    }
  };

  backtrack(0, new Set(), new Set(), new Set(), emptyBoard);

  return solution;
};
