/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * Input: m = 3, n = 7
 * Output: 28
 */

var factorial = function (n) {
  var result = 1;
  for (var i = n; i > 0; i--) result *= i;
  return result;
};

var uniquePaths = function (m, n) {
  if (m == 1 || n == 1) return 1;

  m--;
  n--;

  return factorial(m + n) / (factorial(m) * factorial(n));
};

console.log(uniquePaths(3, 7));
