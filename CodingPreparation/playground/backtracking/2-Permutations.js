/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];

  backtrack(nums, [], result);

  return result;
};

const backtrack = (nums, currentPermute, result) => {
  if (currentPermute.length === nums.length) return result.push(currentPermute);

  for (let i = 0; i < nums.length; i++) {
    if (currentPermute.includes(nums[i])) continue;

    currentPermute.push(nums[i]);

    backtrack(nums, [...currentPermute], result);

    currentPermute.pop();
  }
};

console.log(permute((nums = [1, 2, 3])));
