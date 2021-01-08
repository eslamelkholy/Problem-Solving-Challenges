/**
 * @param {number[]} nums
 * @return {number[]}
 * Input: nums = [1,2,3,4]
 * Output: [1,3,6,10]
 * Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
 */
var runningSum = function (nums) {
  const result = [];
  result.push(nums[0]); // Added First Element
  for (let i = 1; i < nums.length; i++) result.push(nums.slice(0, i + 1).reduce((a, b) => a + b));
  return result;
};

// console.log(runningSum([1, 2, 3, 4]));

// One linear Solution Bad Performance !!
const runningSum2 = (nums) => nums.map((num, i) => (num = nums.slice(0, i + 1).reduce((a, b) => a + b)));

// Performance Optimized Here !!
const runningSum3 = (nums) => {
  const result = [];
  nums.forEach((num, index) => (index !== 0 ? result.push(num + result[index - 1]) : result.push(num)));
  return result;
};

console.log(runningSum3([1, 2, 3, 4]));
