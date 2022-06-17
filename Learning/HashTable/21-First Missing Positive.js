/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  const numSet = new Set();
  let maxNumber = 0;

  for (const num of nums) {
    numSet.add(num);
    maxNumber = Math.max(num, maxNumber);
  }

  for (let i = 1; i <= maxNumber + 1; i++) {
    if (numSet.has(i) === false) return i;
  }

  return -1;
};

console.log(firstMissingPositive([1, 2, 0]));
console.log(firstMissingPositive([3, 4, -1, 1]));
console.log(firstMissingPositive([7, 8, 9, 11, 12]));
