/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSubarray = function (nums, k) {
  let curr = 0;
  let result = 0;
  let left = 0;
  let right = k - 1;

  for (let i = 0; i < k - 1; i++) {
    curr += nums[i];
  }

  while (right < nums.length) {
    const num = nums[right];
    curr += num;

    result = Math.max(result, curr);

    curr -= nums[left];
    left++;

    right++;
  }

  console.log(result);
};

console.log(largestSubarray((nums = [3, -1, 4, 12, -8, 5, 6]), (k = 4)));
console.log(largestSubarray([10, 9, 10, 4, 3, 8, 3, 3, 6, 14, 10, 10, 11, 3], 3));
