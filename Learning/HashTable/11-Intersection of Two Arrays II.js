/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const numsMap1 = new Map();
  const numsMap2 = new Map();
  const result = [];

  for (const num of nums1) numsMap1[num] ? numsMap1[num]++ : (numsMap1[num] = 1);
  for (const num of nums2) numsMap2[num] ? numsMap2[num]++ : (numsMap2[num] = 1);
  const findIntersect = (map1, map2) => {
    for (const key in map1)
      if (map2[key]) {
        let numOfIterate = map1[key];
        if (map1[key] > map2[key]) numOfIterate = map2[key];
        for (let i = 0; i < numOfIterate; i++) result.push(key);
      }
  };

  numsMap1.size > numsMap2.size ? findIntersect(numsMap1, numsMap2) : findIntersect(numsMap2, numsMap1);

  return result;
};

console.log(intersect([1, 2, 2, 1], [2, 2]));
// console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
