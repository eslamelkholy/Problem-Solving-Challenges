/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // Find pivot Element First
  const N = nums.length;
  let left = 0;
  let right = N - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // nums[N - 1] Compare with last element to get pivot
    if (nums[mid] > nums[N - 1]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  const leftSide = binarySearch(nums, target, 0, left - 1);
  if (leftSide !== -1) return leftSide;

  return binarySearch(nums, target, left, N - 1);
};

const binarySearch = (arr, target, left, right) => {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};
