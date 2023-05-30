/**
 * @param {number} n
 * @return {number}
 */
var fibNormal = function (n) {
  if (n < 2) return n;

  return fibNormal(n - 1) + fibNormal(n - 2);
};

/**
 * @param {number} n
 * @return {number}
 */
var fibmemo = function (n) {
  return calculate(n, {});
};

const calculate = (n, memo) => {
  if (memo[n] !== undefined) return memo[n];

  if (n < 2) return (memo[n] = n);

  return (memo[n] = calculate(n - 1, memo) + calculate(n - 2, memo));
};

console.log(fibmemo(5));
