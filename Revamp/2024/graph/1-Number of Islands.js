/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let islands = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      islands += dfs(i, j, grid);
    }
  }

  return islands;
};

const dfs = (x, y, grid) => {
  if (grid[x] === undefined || grid[x][y] === undefined || grid[x][y] === "0") return 0;

  grid[x][y] = "0";

  for (const [dx, dy] of DIRS) {
    dfs(x + dx, y + dy, grid);
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
  numIslands(
    (grid = [
      ["1", "1", "1", "1", "0"],
      ["1", "1", "0", "1", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
    ])
  )
);
