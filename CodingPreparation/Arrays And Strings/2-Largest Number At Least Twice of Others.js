/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  let maxNum = nums[0];
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maxNum) {
      maxNum = nums[i];
      result = i;
    }
  }

  for (const num of nums) {
    if (num * 2 > maxNum && num !== maxNum) return -1;
  }
  return result;
};

console.log(dominantIndex((nums = [3, 6, 1, 0])));
console.log(dominantIndex((nums = [1, 2, 3, 4])));
