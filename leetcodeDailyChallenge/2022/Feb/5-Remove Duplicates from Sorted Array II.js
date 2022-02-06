/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
  let prevElement = nums[0];
  for(let i = 1; i < nums.length ; i++) {
    if(prevElement === nums[i] && nums[i] === nums[i+1] ) {
      for (let j = i ; j < nums.length; j++) {
        if(nums[j] === prevElement) {
          nums.splice(j, 1);
          i--;
          break;
        }
      }
    }
    prevElement = nums[i];
  }
  return nums;
};

var removeDuplicates = function(nums) {
  let prevElement = nums[0];
  for(let i = 1; i < nums.length ; i++) {
    if(prevElement === nums[i] && nums[i] === nums[i+1] ) {
      nums.splice(i, 1);
      i--;
    }
    prevElement = nums[i];
  }
  return nums.length;
};

console.log(removeDuplicates([1,1,1,2,2,3]))
console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]))
console.log(removeDuplicates([0,0,0,0,0]))
