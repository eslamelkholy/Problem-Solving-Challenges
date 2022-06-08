/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let islands = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      islands += traverseIslands(grid, i, j);
    }
  }
  return islands;
};

const traverseIslands = (grid, x, y) => {
  if (grid[x] === undefined || grid[x][y] === undefined || grid[x][y] === '0') {
    return 0;
  }
  grid[x][y] = '0';

  traverseIslands(grid, x + 1, y);
  traverseIslands(grid, x - 1, y);
  traverseIslands(grid, x, y + 1);
  traverseIslands(grid, x, y - 1);

  return 1;
};

console.log(
  numIslands([
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
  ])
);

console.log(
  numIslands([
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
  ])
);
