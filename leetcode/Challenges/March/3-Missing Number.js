/**
 * @param {number[]} nums
 * @return {number}
 */
// var missingNumber = (nums) => {
//   let missing = null;
//   let numbers = {};
//   for (let i = 0; i <= nums.length; i++) if (!numbers[nums[i]]) numbers[nums[i]] = nums[i];

//   for (let j = 0; j <= nums.length; j++) if (!numbers[j]) missing = j;

//   return missing;
// };

var missingNumber = (nums) => {
  let sum = (nums.length * (nums.length + 1)) / 2;
  for (let i = 0; i < nums.length; i++) sum -= nums[i];
  return sum;
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
// console.log(missingNumber([0, 1]));
