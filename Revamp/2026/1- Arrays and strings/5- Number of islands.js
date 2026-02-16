/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let result = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      result += dfs(grid, i, j);
    }
  }

  return result;
};

const dfs = (grid, x, y) => {
  if (grid[x] === undefined || grid[x][y] === undefined || grid[x][y] === '0')
    return 0;

  grid[x][y] = '0'; // mark as visited

  for (const [dx, dy] of DIRS) {
    dfs(grid, x + dx, y + dy);
  }

  return 1;
};

const DIRS = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
