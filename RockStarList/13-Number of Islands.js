/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const visited = new Set();
  let islands = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      islands += traverseIslands(grid, visited, i, j);
    }
  }
  return islands;
};

const traverseIslands = (grid, visited, x, y) => {
  const position = x + ',' + y;
  if (grid[x] === undefined || grid[x][y] === undefined || grid[x][y] === '0' || visited.has(position)) {
    return 0;
  }

  visited.add(position);

  traverseIslands(grid, visited, x + 1, y);
  traverseIslands(grid, visited, x - 1, y);
  traverseIslands(grid, visited, x, y + 1);
  traverseIslands(grid, visited, x, y - 1);

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
