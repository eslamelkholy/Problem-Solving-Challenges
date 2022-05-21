/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const grid = new Array(m).fill(0).map((v) => new Array(n).fill(0));
  const memo = [...grid];
  let numOfUniquePaths = 0;
  const findPaths = (x, y) => {
    if (grid[x] === undefined || grid[x][y] === undefined) return 0;

    if (x === m - 1 && y === n - 1) return 1;

    if (memo[x][y] === 0) {
      memo[x][y] = findPaths(x + 1, y) + findPaths(x, y + 1);
    }

    return memo[x][y];
  };

  return findPaths(0, 0);
};

console.log(uniquePaths(3, 7));
console.log(uniquePaths(3, 2));
