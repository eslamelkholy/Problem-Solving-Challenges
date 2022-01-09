/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const dp = new Array(m).fill(new Array(n).fill(new Array(n).fill(-1)));

  for (let row = m - 1; row >= 0; row--) {
    for (let col1 = 0; col1 < n; col1++) {
      for (let col2 = 0; col2 < n; col2++) {
        let result = 0;
        // current cell
        result += grid[row][col1];
        if (col1 !== col2) {
          result += grid[row][col2];
        }
        // transition
        if (row !== m - 1) {
          let max = 0;
          for (let newCol1 = col1 - 1; newCol1 <= col1 + 1; newCol1++) {
            for (let newCol2 = col2 - 1; newCol2 <= col2 + 1; newCol2++) {
              if (newCol1 >= 0 && newCol1 < n && newCol2 >= 0 && newCol2 < n) {
                console.log(max);
                console.log(dp[row + 1][newCol1][newCol2]);
                max = Math.max(max, dp[row + 1][newCol1][newCol2]);
              }
            }
          }
          result += max;
        }
        dp[row][col1][col2] = result;
      }
    }
  }
  console.log(dp);
  return dp[0][0][n - 1];
};

console.log(
  cherryPickup([
    [3, 1, 1],
    [2, 5, 1],
    [1, 5, 5],
    [2, 1, 1],
  ])
);
