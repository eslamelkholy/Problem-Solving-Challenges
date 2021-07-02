/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let result = 0;
  const walkThroughGrid = (i, j) => {
    if (i < grid.length && i >= 0 && j < grid[0].length && j >= 0 && grid[i][j] === 1) {
      grid[i][j] = 0; // Mark as Visited
    } else return 0;

    return (
      1 +
      walkThroughGrid(i, j + 1, grid) +
      walkThroughGrid(i, j - 1, grid) +
      walkThroughGrid(i + 1, j, grid) +
      walkThroughGrid(i - 1, j, grid)
    );
  };
  for (let i = 0; i < grid.length; i++)
    for (let j = 0; j < grid[i].length; j++)
      if (grid[i][j] === 1) {
        const currentValue = walkThroughGrid(i, j);
        if (currentValue > result) result = currentValue;
      }

  return result;
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
