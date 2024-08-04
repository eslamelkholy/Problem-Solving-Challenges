/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let islands = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (dfs(grid, i, j)) islands++;
    }
  }

  return islands;
};

const dfs = (grid, x, y) => {
  if (grid[x] === undefined || grid[x][y] === undefined || grid[x][y] === "0") return false;
  grid[x][y] = "0";

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
