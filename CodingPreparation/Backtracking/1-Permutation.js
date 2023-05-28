/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];

  backtrack(nums, result, []);

  return result;
};

const backtrack = (nums, result, currentPermute) => {
  if (currentPermute.length === nums.length) {
    return result.push(currentPermute);
  }

  for (const num of nums) {
    if (currentPermute.includes(num)) continue;

    currentPermute.push(num);

    backtrack(nums, result, [...currentPermute]);

    currentPermute.pop();
  }
};

console.log(permute((nums = [1, 2, 3])));
