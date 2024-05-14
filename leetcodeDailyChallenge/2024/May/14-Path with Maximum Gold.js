/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
  let max = 0;
  let totalGold = amountOfGold(grid);

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 0) continue;
      max = Math.max(explorePath(grid, i, j), max);

      // to avoid time limit exceed
      if (max === totalGold) {
        return max;
      }
    }
  }

  return max;
};

const explorePath = (grid, x, y) => {
  let maxSum = 0;
  const stack = [
    {
      x,
      y,
      sum: 0,
      visited: new Set(),
    },
  ];

  while (stack.length > 0) {
    let { x, y, sum, visited } = stack.pop();
    const position = `${x},${y}`;

    if (visited.has(position) || grid[x] === undefined || grid[x][y] === undefined || grid[x][y] === 0) continue;

    visited.add(position);

    sum += grid[x][y];
    maxSum = Math.max(sum, maxSum);

    for (const [dx, dy] of DIRS) {
      stack.push({
        x: x + dx,
        y: y + dy,
        sum,
        visited: new Set(visited),
      });
    }
  }
  return maxSum;
};

const amountOfGold = (grid) => {
  let totalGold = 0;
  grid.forEach((row) => {
    row.forEach((cell) => {
      totalGold += cell;
    });
  });
  return totalGold;
};

const DIRS = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];
console.log(
  getMaximumGold(
    (grid = [
      [0, 6, 0],
      [5, 8, 7],
      [0, 9, 0],
    ])
  )
);

console.log(
  getMaximumGold(
    (grid = [
      [1, 0, 7],
      [2, 0, 6],
      [3, 4, 5],
      [0, 3, 0],
      [9, 0, 20],
    ])
  )
);

console.log(
  getMaximumGold([
    [0, 0, 0, 0, 0, 0, 32, 0, 0, 20],
    [0, 0, 2, 0, 0, 0, 0, 40, 0, 32],
    [13, 20, 36, 0, 0, 0, 20, 0, 0, 0],
    [0, 31, 27, 0, 19, 0, 0, 25, 18, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 18, 0, 6],
    [0, 0, 0, 25, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 21, 0, 30, 0, 0, 0, 0],
    [19, 10, 0, 0, 34, 0, 2, 0, 0, 27],
    [0, 0, 0, 0, 0, 34, 0, 0, 0, 0],
  ])
);

console.log(
  getMaximumGold([
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
  ])
);
