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

var missingNumber = function(nums) {
    let sum = 0;
    let N = nums.length;
    for( let i=0 ; i< N ; ++i ){
        sum += nums[i]; 
    }
		
    return N * (N + 1)/2 - sum;  
};
