/**
 * @param {number[][]} grid
 * @return {number}
 */
var minDays = function (grid) {
  if (countIslands(grid) !== 1) return 0;

  for (let i = 0; i < grid.length; ++i) {
    for (let j = 0; j < grid[i].length; ++j) {
      if (grid[i][j] === 0) continue;

      grid[i][j] = 0; // Remove the land cell

      if (countIslands(grid) !== 1) return 1;
      grid[i][j] = 1; // Restore the land cell
    }
  }

  return 2;
};

const countIslands = (mat) => {
  let islands = 0;
  const grid = mat.map((innerArray) => [...innerArray]);
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      islands += dfs(grid, i, j);
    }
  }

  return islands;
};

const dfs = (grid, x, y) => {
  if (grid[x] === undefined || grid[x][y] === undefined || grid[x][y] === 0) return 0;

  grid[x][y] = 0; // Mark as visited

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

console.log(
  minDays(
    (grid = [
      [1, 1, 0, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 0, 1, 1],
      [1, 1, 0, 1, 1],
    ])
  )
);

console.log(
  minDays([
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ])
);
