/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let leftSum = 0;
    let rightSum = 0;
    for (let j = i + 1; j < nums.length; j++) {
      rightSum += nums[j];
    }

    for (let k = i - 1; k >= 0; k--) {
      leftSum += nums[k];
    }

    if (leftSum === rightSum) return i;
  }

  return -1;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let sum = 0;
  let leftSum = 0;

  for (const num of nums) {
    sum += num;
  }

  for (let i = 0; i < nums.length; i++) {
    if (sum - leftSum - nums[i] === leftSum) return i;
    leftSum += nums[i];
  }
  return -1;
};
