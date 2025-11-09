/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const result = new Set();
  const numSet = new Set();

  for (const num of nums1) {
    numSet.add(num);
  }

  for (const num of nums2) {
    if (numSet.has(num)) result.add(num);
  }

  return [...result];
};
