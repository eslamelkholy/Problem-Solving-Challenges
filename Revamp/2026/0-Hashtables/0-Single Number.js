/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const map = {};

  for (const num of nums) {
    if (map[num] === undefined) {
      map[num] = 1;
    } else {
      map[num]++;
    }
  }

  for (const key in map) {
    if (map[key] === 1) return Number(key);
  }

  return -1;
};
