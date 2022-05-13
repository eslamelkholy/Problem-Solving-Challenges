/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanKBruteForce = function (nums, k) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    const sub = [];
    let sum = 1;
    for (let j = i; j < nums.length; j++) {
      sum *= nums[j];
      sub.push(nums[j]);

      if (sum < k) {
        result++;
      } else {
        break;
      }
    }
  }

  return result;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  let count = 0;
  let left = 0;
  let right = 0;
  let product = 1;

  while (right < nums.length) {
    product *= nums[right];
    while (left <= right && product >= k) product /= nums[left++];

    count += right - left + 1;
    right++;
  }

  return count;
};

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100)); // 8
console.log(numSubarrayProductLessThanK([1, 2, 3], 0));
