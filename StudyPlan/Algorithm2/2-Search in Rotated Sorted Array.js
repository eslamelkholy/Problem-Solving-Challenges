/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let midValue = nums[mid];

    if (midValue === target) {
      return mid;
    }

    if ((target < nums[0] && nums[mid] < nums[0]) || (target >= nums[0] && nums[mid] >= nums[0])) {
      midValue = nums[mid];
    } else {
      if (target < nums[0]) {
        midValue = Number.MIN_SAFE_INTEGER;
      } else {
        midValue = Number.MAX_SAFE_INTEGER;
      }
    }

    if (target > midValue) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // -1
console.log(search([1], 0)); // -1
console.log(search([1, 3], 3)); // 1
console.log(search([3, 5, 1], 3)); // 0
