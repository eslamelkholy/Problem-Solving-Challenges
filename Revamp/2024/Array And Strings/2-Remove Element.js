/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let right = nums.length - 1;
  let left = 0;
  let removed = 0;

  while (left < nums.length && left <= right) {
    if (nums[right] === val) {
      right--;
      removed++;
      continue;
    }

    if (nums[left] === val) {
      const temp = nums[right];
      nums[right] = nums[left];
      nums[left] = temp;
      right--;
      removed++;
    }

    left++;
  }

  return nums.length - removed;
};

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let movingPointer = 0;
  let iteratorPointer = 0;

  while (iteratorPointer < nums.length) {
    if (nums[iteratorPointer] !== val) {
      nums[movingPointer] = nums[iteratorPointer];
      movingPointer++;
    }

    iteratorPointer++;
  }

  return movingPointer;
};
