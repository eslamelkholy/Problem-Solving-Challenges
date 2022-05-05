/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  let counter = 0;
  const numMap = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (numMap[k - num + '']) {
      counter++;
      numMap[k - num + '']--;
    } else {
      numMap[num] = numMap[num] + 1 || 1;
    }
  }
  return counter;
};

var maxOperations = function (nums, k) {
  const numMap = new Map();
  let counter = 0;

  for (let num of nums) {
    if (numMap.get(k - num)) {
      numMap.set(k - num, numMap.get(k - num) - 1), counter++;
    } else {
      numMap.set(num, (numMap.get(num) || 0) + 1);
    }
  }
  return counter;
};

console.log(maxOperations([3, 1, 3, 4, 3], 6)); // 1
console.log(maxOperations([1, 2, 3, 4], 5)); // 2
console.log(maxOperations([2, 5, 4, 4, 1, 3, 4, 4, 1, 4, 4, 1, 2, 1, 2, 2, 3, 2, 4, 2], 3)); // 4
