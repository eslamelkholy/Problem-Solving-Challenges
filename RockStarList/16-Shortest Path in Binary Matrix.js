/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  const M = grid.length;
  const N = grid[0].length;
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [-1, 1],
    [-1, -1],
    [1, 1],
    [1, -1],
  ];

  const queue = [[0, 0, 1]];
  if (grid[0][0] === 1) return -1;

  while (queue.length > 0) {
    const [row, col, distance] = queue.shift();

    if (row === M - 1 && col === N - 1) return distance;

    for (const [dx, dy] of directions) {
      const x = row + dx;
      const y = col + dy;

      if (x < 0 || x >= M) continue;
      if (y < 0 || y >= N) continue;
      if (grid[x][y] === 1) continue;

      queue.push([x, y, distance + 1]);

      grid[x][y] = 1; // Mark as Visited to AVOID TLE
    }
  }

  return -1;
};

console.log(
  shortestPathBinaryMatrix([
    [0, 1],
    [1, 0],
  ])
);
console.log(
  shortestPathBinaryMatrix([
    [0, 0, 0],
    [1, 1, 0],
    [1, 1, 0],
  ])
);
console.log(
  shortestPathBinaryMatrix([
    [1, 0, 0],
    [1, 1, 0],
    [1, 1, 0],
  ])
);
