/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (nums) {
  const numSet = new Set();
  let currentSum = 0;
  let left = 0;
  let right = 0;
  let maxUniqueSubarray = 0;

  while (right < nums.length) {
    const num = nums[right];

    while (numSet.has(num)) {
      currentSum -= nums[left];
      numSet.delete(nums[left]);

      left++;
    }

    numSet.add(num);
    currentSum += num;
    maxUniqueSubarray = Math.max(maxUniqueSubarray, currentSum);

    right++;
  }

  return maxUniqueSubarray;
};

console.log(maximumUniqueSubarray([4, 2, 4, 5, 6]));
console.log(maximumUniqueSubarray([5, 2, 1, 2, 5, 2, 1, 2, 5]));

console.log(maximumUniqueSubarray([10000, 1, 10000, 1, 1, 1, 1, 1, 1]));
