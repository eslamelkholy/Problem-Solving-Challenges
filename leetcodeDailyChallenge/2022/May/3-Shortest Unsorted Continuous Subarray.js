/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  let diffStart = 0;
  let diffEnd = 0;
  let arrSort = nums.slice().sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== arrSort[i]) {
      diffStart = i;
      break;
    }
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] !== arrSort[i]) {
      diffEnd = i + 1;
      break;
    }
  }

  return diffEnd - diffStart;
};
