/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let occuranceCount = 0;

  for (let i = 0; i < nums.length; i++) {
    let numToCut = 0;
    if (nums[i] === k) {
      occuranceCount++;
    }

    for (let j = i + 1; j < nums.length; j++) {
      numToCut += nums[j];
      if (nums[i] + numToCut === k) {
        occuranceCount++;
      }
    }
  }

  return occuranceCount;
};

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

console.log(subarraySum([1, 1, 1], 2)); // 2
console.log(subarraySum([1, 2, 3], 3)); // 2
console.log(subarraySum([-1, -1, 1], 0)); // 1
console.log(subarraySum([0, 0], 0)); // 3
