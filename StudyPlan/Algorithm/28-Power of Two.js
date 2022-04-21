/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n === 0) return false;
  while (n % 2 === 0) {
    n /= 2;
  }
  return n === 1;
};

var isPowerOfTwo = function (n) {
  return n > 0 ? (n & (n - 1)) === 0 : false;
};

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(3));
