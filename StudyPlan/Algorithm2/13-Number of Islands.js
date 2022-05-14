/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const visited = new Set();
  let numOfIslands = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      numOfIslands += traverseIsland(grid, visited, i, j);
    }
  }

  return numOfIslands;
};

/**
 *
 * @param {[[]]} grid
 * @param {Set} visited
 * @param {number} x
 * @param {number} y
 * @returns
 */
const traverseIsland = (grid, visited, x, y) => {
  const position = x + '-' + y;
  if (grid[x] === undefined || grid[x][y] === undefined || grid[x][y] === '0' || visited.has(position)) return 0;

  visited.add(position);

  traverseIsland(grid, visited, x + 1, y);
  traverseIsland(grid, visited, x - 1, y);
  traverseIsland(grid, visited, x, y + 1);
  traverseIsland(grid, visited, x, y - 1);

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
