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
var subarraysDivByK = function (A, K) {
  let freq = new Array(K).fill(0); // "moduloK : Times I've seen it so far"
  freq[0] = 1;
  let sum = 0;
  let count = 0;

  for (let i = 0; i < A.length; i++) {
    sum = sum + A[i];
    var remainder = sum % K;

    if (remainder < 0) remainder += K;

    count += freq[remainder];

    freq[remainder]++;
  }
  return count;
};
