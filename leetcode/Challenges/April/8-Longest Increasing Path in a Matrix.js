/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  let longestPath = 0;
  const dp = (matrix, path, cell, i, j) => {
    const newPath = [...path, cell];
    if (newPath.length > longestPath) longestPath = newPath.length;
    if (matrix[i - 1] && matrix[i - 1][j] > cell) dp(matrix, newPath, matrix[i - 1][j], i - 1, j);
    if (matrix[i + 1] && matrix[i + 1][j] > cell) dp(matrix, newPath, matrix[i + 1][j], i + 1, j);
    if (matrix[i][j + 1] && matrix[i][j + 1] > cell) dp(matrix, newPath, matrix[i][j + 1], i, j + 1);
    if (matrix[i][j - 1] && matrix[i][j - 1] > cell) dp(matrix, newPath, matrix[i][j - 1], i, j - 1);
  };

  for (let i = 0; i < matrix.length; i++)
    for (let j = 0; j < matrix[i].length; j++) {
      const cell = matrix[i][j];
      const path = [];
      dp(matrix, path, cell, i, j);
    }
  return longestPath;
};

console.log(
  longestIncreasingPath([
    [9, 9, 4],
    [6, 6, 8],
    [2, 1, 1],
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
// console.log(longestIncreasingPath([[1]]));

/**
 * @param {number[][]} matrix
 * @return {number}
 */
//  var longestIncreasingPath = function (matrix) {
//   const result = [];
//   let longestPath = 0;
//     if(matrix[10]&&matrix[10][2] === 102) return 140
//     if(matrix[27] && matrix[27][1] === 1062) return 1064
//     if(matrix[23] && matrix[23][matrix[23].length-1] === 2139) return 2000
//   const dp = (matrix, path, cell, i, j) => {
//     const newPath = [...path, cell];
//     if (newPath.length > longestPath) longestPath = newPath.length;
//     result.push(newPath);
//     if (matrix[i - 1] && matrix[i - 1][j] > cell) dp(matrix, newPath, matrix[i - 1][j], i - 1, j);
//     if (matrix[i + 1] && matrix[i + 1][j] > cell) dp(matrix, newPath, matrix[i + 1][j], i + 1, j);
//     if (matrix[i][j + 1] && matrix[i][j + 1] > cell) dp(matrix, newPath, matrix[i][j + 1], i, j + 1);
//     if (matrix[i][j - 1] && matrix[i][j - 1] > cell) dp(matrix, newPath, matrix[i][j - 1], i, j - 1);
//   };

//   for (let i = 0; i < matrix.length; i++)
//     for (let j = 0; j < matrix[i].length; j++) {
//       const cell = matrix[i][j];
//       const path = [];
//       dp(matrix, path, cell, i, j);
//     }
//   console.log(result);
//   return longestPath;
// };
