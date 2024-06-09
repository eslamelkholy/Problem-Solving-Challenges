/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    let currSum = 0;
    for (let j = i; j < nums.length; j++) {
      currSum += nums[j];

      if (currSum % k === 0) result++;
    }
  }
  return result;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
  let freq = new Array(k).fill(0);
  freq[0] = 1;
  let sum = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    let reminder = sum % k;

    if (reminder < 0) reminder += k;

    count += freq[reminder];

    freq[reminder]++;
  }

  return count;
};
