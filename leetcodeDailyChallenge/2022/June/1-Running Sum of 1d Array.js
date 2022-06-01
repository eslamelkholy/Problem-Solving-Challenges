/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum0 = function (nums) {
  const result = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    result.push(result[result.length - 1] + nums[i]);
  }

  return result;
};

var runningSum = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }

  return nums;
};

console.log(runningSum([1, 2, 3, 4]));
console.log(runningSum([1, 1, 1, 1, 1]));
