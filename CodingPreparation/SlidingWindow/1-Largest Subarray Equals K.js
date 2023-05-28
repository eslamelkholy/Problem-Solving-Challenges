/**
 * @param {number[]} nums
 * @param {number} k
 */
const largestSubarray = (nums, k) => {
  let right = 0;
  let left = 0;
  let sumSubarray = 0;
  let largestLengthSubarray = 0;

  while (right < nums.length) {
    sumSubarray += nums[right];

    while (sumSubarray > k) {
      sumSubarray -= nums[left];

      left++;
    }

    largestLengthSubarray = Math.max(largestLengthSubarray, right - left + 1);

    right++;
  }

  return largestLengthSubarray;
};

console.log(largestSubarray((nums = [3, 1, 2, 7, 4, 2, 1, 1, 5]), (k = 8)));
