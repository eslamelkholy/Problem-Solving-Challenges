/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  let result = 0;

  for (let i = 0; i < nums.length; i += 2) {
    result += nums[i];
  }

  return result;
};

console.log(arrayPairSum((nums = [1, 4, 3, 2])));
console.log(arrayPairSum((nums = [6, 2, 6, 5, 1, 2])));
