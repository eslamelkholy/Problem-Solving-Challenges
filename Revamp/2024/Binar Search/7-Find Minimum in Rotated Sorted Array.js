/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  // Find Pivot element
  const N = nums.length;
  let left = 0;
  let right = N - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[N - 1]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return nums[left];
};
