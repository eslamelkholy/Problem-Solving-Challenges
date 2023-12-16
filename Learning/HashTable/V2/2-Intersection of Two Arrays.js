/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const set = new Set();
  const result = new Set();

  for (const num of nums1) {
    set.add(num);
  }

  for (const num of nums2) {
    if (set.has(num)) result.add(num);
  }

  return [...result];
};

console.log(intersection((nums1 = [4, 9, 5]), (nums2 = [9, 4, 9, 8, 4])));
