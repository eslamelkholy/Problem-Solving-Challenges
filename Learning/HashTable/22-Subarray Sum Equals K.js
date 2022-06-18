/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const numsMap = new Map();
  numsMap.set(0, 1);

  var sum = 0;
  var occuranceCount = 0;
  for (var num of nums) {
    sum += num;
    if (numsMap.has(sum - k)) {
      occuranceCount += numsMap.get(sum - k);
    }
    numsMap.set(sum, numsMap.has(sum) ? numsMap.get(sum) + 1 : 1);
  }
  return occuranceCount;
};
