/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  const fibResult = [0, 1];
  for (let i = 2; i <= n; i++) fibResult[i] = fibResult[i - 1] + fibResult[i - 2];

  return fibResult[n];
};

console.log(fib(4));
