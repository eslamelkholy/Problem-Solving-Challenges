/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    let inc = 1, dec = 1;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > nums[i-1]) 
            inc = dec + 1;
        
        if(nums[i] < nums[i-1])
            dec = inc + 1;
    }
    return Math.max(inc, dec);
};
