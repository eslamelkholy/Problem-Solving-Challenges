/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  const numMap = {};
  let max = 0;
  for (const num of nums) {
    numMap[num] = num;
    if (num > max) max = num;
  }

  for (let i = 1; i <= max + 1; i++) if (!numMap[i]) return i;
};

console.log(firstMissingPositive([3, 4, -1, 1]));
console.log(firstMissingPositive([7, 8, 9, 11, 12]));
console.log(firstMissingPositive([1, 2, 0]));
