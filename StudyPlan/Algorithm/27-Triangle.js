/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const dp = new Array(triangle[triangle.length - 1].length + 1).fill(0);

  for (let i = triangle.length - 1; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      dp[j] = triangle[i][j] + Math.min(dp[j], dp[j + 1]);
    }
  }

  return dp[0];
};

var minimumTotal = function (triangle) {
  for (let i = triangle.length - 2; i >= 0; i--)
    for (let j = 0; j < triangle[i].length; j++)
      triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
  return triangle[0][0];
};
console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
console.log(minimumTotal([[-10]]));
console.log(minimumTotal([[-1], [2, 3], [1, -1, -3]]));
