/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function (grid) {
  const N = grid.length;
  const expandedGrid = new Array(N * 3).fill(0).map(() => new Array(N * 3).fill(0));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      const baseRow = 3 * i;
      const baseCol = 3 * j;

      if (grid[i][j] == "\\") {
        expandedGrid[baseRow][baseCol] = 1;
        expandedGrid[baseRow + 1][baseCol + 1] = 1;
        expandedGrid[baseRow + 2][baseCol + 2] = 1;
      } else if (grid[i][j] == "/") {
        expandedGrid[baseRow][baseCol + 2] = 1;
        expandedGrid[baseRow + 1][baseCol + 1] = 1;
        expandedGrid[baseRow + 2][baseCol] = 1;
      }
    }
  }

  let count = 0;
  for (let i = 0; i < expandedGrid.length; i++) {
    for (let j = 0; j < expandedGrid[0].length; j++) {
      if (dfs(expandedGrid, i, j)) count++;
    }
  }

  return count;
};

const dfs = (grid, x, y) => {
  if (grid[x] === undefined || grid[x][y] === undefined || grid[x][y] === 1) return false;

  grid[x][y] = 1; // Mark as visited;

  for (const [dx, dy] of DIRS) {
    dfs(grid, x + dx, y + dy);
  }

  return true;
};

const DIRS = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
