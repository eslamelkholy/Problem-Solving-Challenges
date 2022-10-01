/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numMap = new Map();
  const map2 = new Map();
  for (let i = 0; i < nums.length; i++) {
    numMap.set(i, nums[i]);
    map2.set(nums[i], i);
  }

  for (const [index, num] of numMap) {
    if (map2.has(target - num) && index !== map2.get(target - num)) return [index, map2.get(target - num)];
  }
};

var twoSum = function (nums, target) {
  let history = {};
  for (let i = 0; i < nums.length; i++) {
    if (history[target - nums[i]] !== undefined) {
      return [history[target - nums[i]], i];
    }
    history[nums[i]] = i;
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numMap = {};
  for (let i = 0; i < nums.length; i++) {
    const sumVal = target - nums[i];

    if (numMap[sumVal] !== undefined) {
      return [i, numMap[sumVal]];
    }
    numMap[nums[i]] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 3], 6));
console.log(twoSum([3, 2, 4], 6));
