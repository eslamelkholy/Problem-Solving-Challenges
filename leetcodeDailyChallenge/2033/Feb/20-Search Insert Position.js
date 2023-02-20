/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid = -1;

  while (left <= right) {
    mid = Math.floor((left + right) / 2); // 1

    if (nums[mid] === target) return mid;

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};

console.log(searchInsert((nums = [1, 3, 5, 6]), (target = 5)));
console.log(searchInsert((nums = [1, 3, 5, 6]), (target = 2)));
console.log(searchInsert((nums = [1, 3, 5, 6]), (target = 7)));
console.log(searchInsert([1], 1));
console.log(searchInsert([1, 3], 2));
