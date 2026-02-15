/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const set1 = new Set();
  const set2 = new Set();
  const results = [];

  for (const num of nums1) {
    set1.add(num);
  }

  for (const num of nums2) {
    set2.add(num);
  }

  for (const key of set1) {
    if (set2.has(key)) results.push(key);
  }

  return results;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const set = new Set();
  const results = new Set();

  for (const num of nums1) {
    set.add(num);
  }

  for (const num of nums2) {
    if (set.has(num)) results.add(num);
  }

  return [...results];
};
