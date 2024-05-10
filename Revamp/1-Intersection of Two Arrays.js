/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const numSet = new Set();
  const resultSet = new Set();

  for (const num of nums1) {
    numSet.add(num);
  }

  for (const num of nums2) {
    if (numSet.has(num)) {
      resultSet.add(num);
    }
  }

  return [...resultSet];
};
