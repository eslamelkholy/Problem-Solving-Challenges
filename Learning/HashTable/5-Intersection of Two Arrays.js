/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const set1 = new Set();
  const set2 = new Set();
  for (const num of nums1) set1.add(num);
  for (const num of nums2) set2.add(num);
  return set1.size > set2.size ? findIntersection(set1, set2) : findIntersection(set2, set1);
};

const findIntersection = (set1, set2) => {
  const result = [];
  for (const val of set1) if (set2.has(val)) result.push(val);
  return result;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const numsSet = new Set();
  const intersectionSet = new Set();
  const result = [];

  for (const num of nums1) {
    numsSet.add(num);
  }

  for (const num of nums2) {
    if (numsSet.has(num) && !intersectionSet.has(num)) {
      result.push(num);
      intersectionSet.add(num);
    }
  }

  return result;
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
