/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let maxArea = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const area = dfs(grid, i, j);
      maxArea = Math.max(maxArea, area);
    }
  }

  return maxArea;
};

const dfs = (grid, x, y) => {
  if (grid[x] === undefined || grid[x][y] === undefined || grid[x][y] === 0)
    return 0;

  grid[x][y] = 0; // mark as visited
  let currentArea = 1;

  for (const [dx, dy] of DIRS) {
    currentArea += dfs(grid, x + dx, y + dy, currentArea + 1);
  }

  return currentArea;
};

const DIRS = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
