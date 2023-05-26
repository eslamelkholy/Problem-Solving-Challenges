/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  while (leftPointer < rightPointer) {
    while (rightPointer >= 0) {
      if (nums[rightPointer] !== val) break;
      rightPointer--;
    }
    if (nums[leftPointer] === val) {
      const temp = nums[rightPointer];
      nums[rightPointer] = nums[leftPointer];
      nums[leftPointer] = temp;
    }

    leftPointer++;
  }

  return nums;
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

console.log(removeElement((nums = [3, 2, 2, 3]), (val = 3)));
console.log(removeElement((nums = [0, 1, 2, 2, 3, 0, 4, 2]), (val = 2)));
