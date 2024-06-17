/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  let left = 0;
  let right = Math.ceil(Math.sqrt(c));
  while (left <= right) {
    let sum = left * left + right * right;

    if (sum === c) return true;

    if (sum < c) {
      left++;
    } else if (sum > c) {
      right--;
    }
  }
  return false;
};
