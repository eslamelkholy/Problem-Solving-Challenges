/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  let largestNum = Number.MIN_SAFE_INTEGER;
  let prevLargest;
  let index = -1;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num > largestNum) {
      prevLargest = largestNum;
      largestNum = num;
      index = i;
    }
    if (num > prevLargest && num < largestNum) {
      prevLargest = num;
    }
  }

  if (largestNum / 2 >= prevLargest) {
    return index;
  }

  return -1;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  let max = nums[0];
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= max) {
      max = nums[i];
      index = i;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== max && 2 * nums[i] > max) {
      return -1;
    }
  }
  return index;
};
