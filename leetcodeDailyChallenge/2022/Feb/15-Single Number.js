/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const numMap = {};
  
  for (const num of nums) {
    numMap[num] ? numMap[num]++ : numMap[num] = 1;
  }

  for (const key in numMap) {
    if(numMap[key] === 1) return key;
  }

  return -1;
};
