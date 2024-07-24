/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function (mapping, nums) {
  let numMap = {};
  for (const num of nums) {
    let mapChar = "";
    for (const char of num.toString()) {
      mapChar += mapping[char];
    }

    numMap[num] = Number(mapChar);
  }

  nums.sort((a, b) => numMap[a] - numMap[b]);

  return nums;
};

console.log(sortJumbled((mapping = [8, 9, 4, 0, 2, 1, 3, 5, 7, 6]), (nums = [991, 338, 38])));
