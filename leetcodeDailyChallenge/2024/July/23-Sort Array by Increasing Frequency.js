/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  const numMap = {};

  for (const num of nums) {
    numMap[num]++ || (numMap[num] = 1);
  }

  nums.sort((a, b) => {
    if (numMap[a] === numMap[b]) return b - a;

    return numMap[a] - numMap[b];
  });

  return nums;
};
