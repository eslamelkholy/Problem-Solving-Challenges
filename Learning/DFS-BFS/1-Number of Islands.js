/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands0 = function (grid) {
  const visited = new Set();
  let islands = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      islands += traverseIsland(grid, visited, i, j);
    }
  }
  return islands;
};

const traverseIsland0 = (grid, visited, x, y) => {
  const position = x + ',' + y;
  if (grid[x] === undefined || grid[x][y] === undefined || grid[x][y] === '0' || visited.has(position)) {
    return 0;
  }

  visited.add(position);

  traverseIsland0(grid, visited, x + 1, y);
  traverseIsland0(grid, visited, x - 1, y);
  traverseIsland0(grid, visited, x, y + 1);
  traverseIsland0(grid, visited, x, y - 1);

  return 1;
};

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let islands = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      islands += traverseIsland(grid, i, j);
    }
  }
  return islands;
};

const traverseIsland = (grid, x, y) => {
  if (grid[x] === undefined || grid[x][y] === undefined || grid[x][y] === '0') {
    return 0;
  }

  grid[x][y] = '0';

  traverseIsland(grid, x + 1, y);
  traverseIsland(grid, x - 1, y);
  traverseIsland(grid, x, y + 1);
  traverseIsland(grid, x, y - 1);

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
