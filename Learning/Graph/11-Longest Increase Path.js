/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  let maxSteps = 1;
  const visited = {};

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const result = exploreGraph(matrix, i, j, visited, Number.MIN_SAFE_INTEGER);
      console.log('RESULT = ', result);
      maxSteps = Math.max(result, maxSteps);
    }
  }
  return maxSteps;
};

const exploreGraph = (matrix, row, col, visited, prev) => {
  const position = row + '-' + col;
  if (matrix[row] === undefined || matrix[row][col] === undefined || matrix[row][col] <= prev) return 0;

  if (visited[position] !== undefined) {
    return visited[position];
  }

  const currentVal = matrix[row][col];
  let steps = 1;

  const total1 = exploreGraph(matrix, row + 1, col, visited, currentVal);
  const total2 = exploreGraph(matrix, row - 1, col, visited, currentVal);
  const total3 = exploreGraph(matrix, row, col + 1, visited, currentVal);
  const total4 = exploreGraph(matrix, row, col - 1, visited, currentVal);

  steps = Math.max(steps, total1 + 1);
  steps = Math.max(steps, total2 + 1);
  steps = Math.max(steps, total3 + 1);
  steps = Math.max(steps, total4 + 1);
  visited[position] = steps;

  console.log('Current Value = ', currentVal, 'Current Totals = ', steps);

  return steps;
};

console.log(
  longestIncreasingPath([
    [9, 9, 4],
    [6, 6, 8],
    [2, 1, 1],
  ])
);
console.log(
  longestIncreasingPath([
    [3, 4, 5],
    [3, 2, 6],
    [2, 2, 1],
  ])
);

// console.log(
//   longestIncreasingPath([
//     [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//     [19, 18, 17, 16, 15, 14, 13, 12, 11, 10],
//     [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
//     [39, 38, 37, 36, 35, 34, 33, 32, 31, 30],
//     [40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
//     [59, 58, 57, 56, 55, 54, 53, 52, 51, 50],
//     [60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
//     [79, 78, 77, 76, 75, 74, 73, 72, 71, 70],
//     [80, 81, 82, 83, 84, 85, 86, 87, 88, 89],
//     [99, 98, 97, 96, 95, 94, 93, 92, 91, 90],
//     [100, 101, 102, 103, 104, 105, 106, 107, 108, 109],
//     [119, 118, 117, 116, 115, 114, 113, 112, 111, 110],
//     [120, 121, 122, 123, 124, 125, 126, 127, 128, 129],
//     [139, 138, 137, 136, 135, 134, 133, 132, 131, 130],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   ])
// );
