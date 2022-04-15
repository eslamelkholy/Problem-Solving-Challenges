/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const visited = new Set();
  let maxSize = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 0) continue;

      const islandSize = findIslandSize(grid, visited, i, j);
      maxSize = Math.max(islandSize, maxSize);
    }
  }
  return maxSize;
};

const findIslandSize = (grid, visited, x, y) => {
  const position = x + "-" + y;
  if (
    grid[x] === undefined ||
    grid[x][y] === undefined ||
    grid[x][y] === 0 ||
    visited.has(position)
  )
    return 0;

  visited.add(position);
  let size = 1;

  size += findIslandSize(grid, visited, x + 1, y);
  size += findIslandSize(grid, visited, x - 1, y);
  size += findIslandSize(grid, visited, x, y + 1);
  size += findIslandSize(grid, visited, x, y - 1);

  return size;
};

console.log(
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ])
);
