/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const cache = {};
  return dfs(obstacleGrid, 0, 0, cache);
};

const dfs = (grid, x, y, cache) => {
  if (grid[x] === undefined || grid[x][y] === undefined || grid[x][y] === 1)
    return 0;
  if (x === grid.length - 1 && y === grid[0].length - 1) return 1;

  const position = `${x},${y}`;
  if (cache[position] !== undefined) return cache[position];

  cache[position] = 0;
  for (const [dx, dy] of DIRS) {
    cache[position] += dfs(grid, x + dx, y + dy, cache);
  }

  return cache[position];
};

const DIRS = [
  [1, 0],
  [0, 1],
];
