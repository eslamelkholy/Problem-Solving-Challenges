/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * Example:1
 * nums = [-1,2,1,-4], target = 2
 * Result: 2
 *
 * Example:2
 * nums = [0,0,0] , target = 1
 * Result: 0
 *
 * Example:3
 * nums=[-1,2,1,-4], target = 1
 * Example:4
 * nums=[1,1,1,0], target=-100
 * result:2
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let closest = Infinity;
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    right = nums.length - 1;
    while (left < right) {
      let localSum = nums[i] + nums[left] + nums[right];
      if (Math.abs(localSum - target) < Math.abs(closest - target)) closest = localSum;
      if (localSum > target) right--;
      else left++;
    }
  }
  return closest;
};

console.log(threeSumClosest([1, 1, 1, 0], -100));
// console.log(threeSumClosest([-1, 2, 1, -4], 2));
// console.log(threeSumClosest([0, 2, 1, -3], 1));
