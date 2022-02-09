/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  let uniqueDiffsCounter = 0;
  const uniqueDiffsSet = new Set();
  
  for(let i = 0; i < nums.length; i++) {
      for(let j = i + 1; j < nums.length; j++) {
          const kDiff = Math.abs(nums[i] - nums[j]);
          let numsAdded = nums[i] + nums[j];

          if(kDiff === k && !uniqueDiffsSet.has(numsAdded)) {
              uniqueDiffsSet.add(numsAdded);
              uniqueDiffsCounter++;
          }
      }
  }
  return uniqueDiffsCounter;
};

console.log(findPairs([3,1,4,1,5], 2))
console.log(findPairs([1,2,4,4,3,3,0,9,2,3], 3))
