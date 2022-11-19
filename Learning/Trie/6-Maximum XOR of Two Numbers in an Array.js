/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function (nums) {
  let maxXOR = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      maxXOR = Math.max(maxXOR, nums[i] ^ nums[j]);
    }
  }
  return maxXOR;
};

console.log(findMaximumXOR([3, 10, 5, 25, 2, 8]));
