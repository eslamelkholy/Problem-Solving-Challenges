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
var numIslands1 = function (grid) {
  let islands = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      islands += traverseIsland1(grid, i, j);
    }
  }
  return islands;
};

const traverseIsland1 = (grid, x, y) => {
  if (grid[x] === undefined || grid[x][y] === undefined || grid[x][y] === '0') {
    return 0;
  }

  grid[x][y] = '0';

  traverseIsland1(grid, x + 1, y);
  traverseIsland1(grid, x - 1, y);
  traverseIsland1(grid, x, y + 1);
  traverseIsland1(grid, x, y - 1);

  return 1;
};

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let islands = 0;

  const traverseIsland = (x, y) => {
    if (grid[x] === undefined || grid[x][y] === undefined || grid[x][y] === '0') {
      return 0;
    }

    grid[x][y] = '0';

    traverseIsland(x + 1, y);
    traverseIsland(x - 1, y);
    traverseIsland(x, y + 1);
    traverseIsland(x, y - 1);

    return 1;
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      islands += traverseIsland(i, j);
    }
  }

  return islands;
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
