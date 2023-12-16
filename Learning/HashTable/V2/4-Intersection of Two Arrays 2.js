/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const map1 = {};
  const map2 = {};
  const result = [];

  for (const num of nums1) {
    map1[num]++ || (map1[num] = 1);
  }
  for (const num of nums2) {
    map2[num]++ || (map2[num] = 1);
  }

  for (const key in map1) {
    if (map2[key] === undefined) continue;

    const N = map2[key] > map1[key] ? map1[key] : map2[key];

    for (let i = 0; i < N; i++) {
      result.push(key);
    }
  }
  return result;
};

console.log(intersect((nums1 = [1, 2, 2, 1]), (nums2 = [2, 2])));
console.log(intersect((nums1 = [4, 9, 5]), (nums2 = [9, 4, 9, 8, 4])));
