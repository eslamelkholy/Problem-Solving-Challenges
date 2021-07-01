var searchRange = function(nums, target) {
  const result = [-1,-1];
  for (let i = 0;i< nums.length;i++)
    if(nums[i] === target) {
      result[0] = i;
      break;
    }
  for (let i = nums.length-1;i>= 0;i--)
    if(nums[i] === target) {
      result[1] = i;
      break;
    }
  return result
};


var searchRange = (nums, target)=> [nums.indexOf(target), nums.lastIndexOf(target)] || [-1, -1]; 