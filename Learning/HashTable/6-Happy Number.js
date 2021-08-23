/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  var hash = {};
  while (n !== 1) {
    if (!hash[n]) {
      hash[n] = true;
      n = getSquareSum(n);
    } else {
      return false;
    }
  }
  return true;
};

function getSquareSum(n) {
  var sum = 0;
  while (n !== 0) {
    var digit = n % 10;
    sum += digit ** 2;
    n = Math.floor(n / 10);
  }
  return sum;
}
console.log(isHappy(19));
