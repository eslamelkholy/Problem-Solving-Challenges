/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let countTop = 0;
    for(let i = 0; i < nums.length-1; i++) {
        if(nums[i] > nums[i+1]) {
            if(nums[i-1] > nums[i+1]) {
                nums[i+1] = nums[i];
            }
            countTop++;
        }
    }
    return countTop <= 1;
};
