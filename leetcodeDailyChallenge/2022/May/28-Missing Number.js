/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const numSet = new Set();
    for(const num of nums) numSet.add(num)
    
    for(i = 0; i <= nums.length; i++){
        if(!numSet.has(i)) return i;
    }
    
    return -1;
};

var missingNumber = function(nums) {
    nums.sort((a,b) => a - b)
    
    for(let i = 0; i <= nums.length; i++) {
        if(nums[i] !== i) return i;
    }
    return -1;
};
