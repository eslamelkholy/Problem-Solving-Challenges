/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const cache = {};
  return dfs(m, n, 0, 0, cache);
};

const dfs = (m, n, x, y, cache) => {
  if (x < 0 || x > m - 1 || y < 0 || y > n - 1) return 0;
  if (x === m - 1 && y === n - 1) return 1;

  const position = `${x},${y}`;
  if (cache[position] !== undefined) return cache[position];

  paths = 0;
  for (const [dx, dy] of DIRS) {
    paths += dfs(m, n, x + dx, y + dy, cache);
  }

  cache[position] = paths;
  return paths;
};

const DIRS = [
  [1, 0],
  [0, 1],
];
