/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
  let left = 0;
  let right = 0;
  let windowSum = 0;
  let operations = Number.MAX_SAFE_INTEGER;

  const sum = nums.reduce((s, v) => s + v, 0);
  const target = sum - x;

  if (target < 0) return -1;
  if (target === 0) return nums.length;

  while (right < nums.length) {
    const num = nums[right];
    windowSum += num;

    while (windowSum > target) {
      windowSum -= nums[left];
      left++;
    }

    if (windowSum === target) {
      operations = Math.min(operations, left + nums.length - right - 1);
    }

    right++;
  }
  return operations === Number.MAX_SAFE_INTEGER ? -1 : operations;
};

console.log(minOperations([1, 1, 4, 2, 3], 5));
console.log(minOperations([5, 6, 7, 8, 9], 4));
console.log(minOperations([3, 2, 20, 1, 1, 3], 10));
