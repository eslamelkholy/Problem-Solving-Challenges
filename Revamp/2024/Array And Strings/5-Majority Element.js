/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = {};

  for (const num of nums) {
    map[num]++ || (map[num] = 1);

    if (map[num] > nums.length / 2) return num;
  }
};
