/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];

  const backtrack = (currentPermute) => {
    if (currentPermute.length === nums.length) return result.push(currentPermute);

    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if (currentPermute.includes(num)) continue;

      currentPermute.push(num);

      backtrack([...currentPermute]);

      currentPermute.pop();
    }
  };
  backtrack([]);

  return result;
};

console.log(permute((nums = [1, 2, 3])));
