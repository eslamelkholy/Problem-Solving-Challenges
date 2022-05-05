/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const result = [-1, -1];
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const currentVal = nums[mid];
    if (currentVal === target) {
      for (let i = mid; i < nums.length; i++) {
        if (nums[i] === currentVal) {
          result[1] = i;
        } else {
          break;
        }
      }
      for (let i = mid; i >= 0; i--) {
        if (nums[i] === currentVal) {
          result[0] = i;
        } else {
          break;
        }
      }
    }

    if (currentVal < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
console.log(searchRange([], 0));
console.log(searchRange([1], 1));
