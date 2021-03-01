/**
 * @param {number} n - a positive integer
 * @return {number}
 *
 * Input: 11111111111111111111111111111101
 * OutPut: 31
 * Input: 00000000000000000000000010000000
 * Output: 1
 *
 */
var hammingWeight = function (n) {
  let sum = 0;
  while (n != 0) {
    sum++;
    n &= n - 1;
  }
  return sum;
};

console.log(hammingWeight(11111111111111111111111111111101));
