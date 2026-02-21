/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  const N = grid.length;
  const M = grid[0].length;

  if (grid[0][0] === 1 || grid[N - 1][M - 1] === 1) return -1; // Early exit

  const queue = [[0, 0, 1]]; // x, y, steps (starts at 1)
  grid[0][0] = 1; // mark visited

  while (queue.length > 0) {
    let [x, y, steps] = queue.shift();

    if (x === N - 1 && y === M - 1) return steps;

    for (const [dx, dy] of DIRS) {
      const newX = x + dx;
      const newY = y + dy;
      if (
        grid[newX] === undefined ||
        grid[newX][newY] === undefined ||
        grid[newX][newY] === 1
      )
        continue;

      grid[newX][newY] = 1;
      queue.push([newX, newY, steps + 1]);
    }
  }

  return -1;
};

const DIRS = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
  [1, 1],
  [1, -1],
  [-1, 1],
  [-1, -1],
];
