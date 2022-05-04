/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
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
console.log(maxOperations([1, 2, 3, 4], 5)); // 2
console.log(maxOperations([3, 1, 3, 4, 3], 6)); // 1
