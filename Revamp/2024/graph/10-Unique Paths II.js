/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const N = obstacleGrid.length;
  const M = obstacleGrid[0].length;
  const memo = new Array(N).fill(0).map((v) => new Array(M).fill(0));

  const traverse = (obstacleGrid, x, y) => {
    if (obstacleGrid[x] === undefined || obstacleGrid[x][y] === undefined || obstacleGrid[x][y] === 1) return 0;

    if (x === N - 1 && y === M - 1) {
      return 1;
    }

    if (memo[x][y] !== 0) return memo[x][y];

    memo[x][y] = traverse(obstacleGrid, x + 1, y) + traverse(obstacleGrid, x, y + 1);
    return memo[x][y];
  };

  return traverse(obstacleGrid, 0, 0);
};
