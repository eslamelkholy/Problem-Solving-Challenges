/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    console.log(nums);
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let iteratorPointer = 0;
  let movingPointer = 0;

  while (iteratorPointer < nums.length) {
    if (nums[iteratorPointer] !== val) {
      nums[movingPointer] = nums[iteratorPointer];
      movingPointer++;
    }

    iteratorPointer++;
  }

  return movingPointer;
};
