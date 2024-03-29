/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles0 = function (obstacleGrid) {
  let paths = 0;
  const target = `${obstacleGrid.length - 1},${obstacleGrid[obstacleGrid.length - 1].length - 1}`;

  const dfs = (x, y) => {
    const position = `${x},${y}`;
    if (obstacleGrid[x] === undefined || obstacleGrid[x][y] === undefined || obstacleGrid[x][y] === 1) return 0;

    if (position === target) {
      return paths++;
    }

    dfs(x + 1, y);
    dfs(x, y + 1);
  };

  dfs(0, 0);

  return paths;
};

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles1 = function (obstacleGrid) {
  const M = obstacleGrid.length;
  const N = obstacleGrid[0].length;
  const gridTraverse = new GridTraverser(M, N);

  return gridTraverse.traverse(0, 0, obstacleGrid);
};

class GridTraverser {
  constructor(M, N) {
    this.M = M;
    this.N = N;
    this.memo = new Array(M).fill(0).map((v) => new Array(N).fill(0));
  }

  traverse(x, y, grid) {
    if (grid[x] === undefined || grid[x][y] === undefined || grid[x][y] === 1) return 0;

    if (x === this.M - 1 && y === this.N - 1) return 1;

    if (this.memo[x][y] === 0) {
      this.memo[x][y] = this.traverse(x + 1, y, grid) + this.traverse(x, y + 1, grid);
    }

    return this.memo[x][y];
  }
}

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles2 = function (obstacleGrid) {
  const M = obstacleGrid.length;
  const N = obstacleGrid[0].length;
  const memo = new Array(M).fill(0).map((v) => new Array(N).fill(0));

  const traverse = (x, y) => {
    if (obstacleGrid[x] === undefined || obstacleGrid[x][y] === undefined || obstacleGrid[x][y] === 1) return 0;

    if (x === M - 1 && y === N - 1) return 1;

    if (memo[x][y] === 0) {
      memo[x][y] = traverse(x + 1, y) + traverse(x, y + 1);
    }
    return memo[x][y];
  };

  return traverse(0, 0);
};

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const M = obstacleGrid.length;
  const N = obstacleGrid[0].length;
  const memo = new Array(M).fill(0).map((v) => new Array(N).fill(0)); // memo Array to Cache the Result

  const traverse = (x, y) => {
    if (obstacleGrid[x] === undefined || obstacleGrid[x][y] === undefined || obstacleGrid[x][y] === 1) return 0; // check is there is Obstacle

    if (x === M - 1 && y === N - 1) return 1; // if we reach the Target we need

    if (memo[x][y] === 0) {
      // start to traverse at this point if !== 0
      memo[x][y] = traverse(x + 1, y) + traverse(x, y + 1);
    }
    return memo[x][y]; // Return the result
  };

  return traverse(0, 0);
};

console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);

console.log(
  uniquePathsWithObstacles([
    [0, 1],
    [0, 0],
  ])
);

// console.log(
//   uniquePathsWithObstacles([
//     [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
//     [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1],
//     [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
//     [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0],
//     [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//     [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
//     [0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
//     [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
//     [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
//     [0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
//     [1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0],
//     [0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0],
//     [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0],
//     [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1],
//     [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
//     [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
//     [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1],
//     [1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
//   ])
// );
