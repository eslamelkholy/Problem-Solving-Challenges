/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (i < j < k && nums[i] < nums[k] && nums[j] > nums[k]) {
          return true;
        }
      }
    }
  }
  return false;
};

console.log(find132pattern([1, 2, 3, 4]));
console.log(find132pattern([3, 1, 4, 2]));
console.log(find132pattern([-1, 3, 2, 0]));
