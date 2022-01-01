/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  var subSet = [];
  nums.sort((a, b) => a - b);

  dfs(nums, subSet);

  return subSet;
};

var dfs = function (nums, subSet, tmpArray = [], start = 0) {
  subSet.push(Array.from(tmpArray));
  if (start === nums.length) return;

  for (var i = start; i < nums.length; i++) {
    if (i > start && nums[i] == nums[i - 1]) continue;

    tmpArray.push(nums[i]);
    dfs(nums, subSet, tmpArray, i + 1);
    tmpArray.pop();
  }
};

console.log(subsetsWithDup([1, 2, 2]));
