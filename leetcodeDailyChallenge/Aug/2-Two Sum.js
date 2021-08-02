var twoSum = function (nums, target) {
  const numMap = {};
  for (let i = 0; i < nums.length; i++) numMap[nums[i]] = i;

  for (let i = 0; i < nums.length; i++) {
    const theRest = target - nums[i];
    if (numMap[theRest] && numMap[theRest] !== i) return [i, numMap[theRest]];
  }
};
