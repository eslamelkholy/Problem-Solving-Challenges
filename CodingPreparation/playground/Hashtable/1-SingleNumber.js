/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const numMap = {};

  for (const num of nums) {
    numMap[num]++ || (numMap[num] = 1);
  }

  for (const key in numMap) {
    if (numMap[key] === 1) return key;
  }

  return -1;
};

console.log(singleNumber((nums = [4, 1, 2, 1, 2])));
