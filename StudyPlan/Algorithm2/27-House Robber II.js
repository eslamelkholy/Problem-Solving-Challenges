/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
  if (nums.length === 1) return nums[0];

  let route1 = [nums[0]];
  let route2 = [0, nums[1]];
  const len = nums.length;

  route1[1] = Math.max(nums[1], route1[0]);

  for (let i = 2; i < len - 1; i++) {
    route1[i] = Math.max(route1[i - 2] + nums[i], route1[i - 1]);
    route2[i] = Math.max(route2[i - 2] + nums[i], route2[i - 1]);
  }

  route2[len - 1] = Math.max(nums[len - 1] + route2[len - 3] || 0, route2[len - 2]);

  return Math.max(route1.pop(), route2.pop());
}
console.log(rob([2, 3, 2])); // 3
console.log(rob([1, 2, 3, 1])); // 4
console.log(rob([1, 2, 3])); // 3
console.log(rob([1, 2, 1, 1])); // 3
console.log(rob([1, 3, 1, 3, 100]));
