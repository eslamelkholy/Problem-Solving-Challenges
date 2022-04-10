/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    result.push(Math.pow(nums[i], 2));
  }

  return result.sort((a, b) => a - b);
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
