/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  m = grid.length;
  n = grid[0].length;

  for (let j = 0; j < k; j++) {
    for (let i = 0; i < m; i++) {
      grid[i].unshift(grid[(m + i - 1) % m].pop());
    }
  }
  return grid;
};
console.log(
  shiftGrid(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    1
  )
);
