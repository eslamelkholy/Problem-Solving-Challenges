/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let low = 0;
  let high = nums.length - 1;
  let minVal = nums[0];
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const currentItem = nums[mid];

    currentItem < minVal ? (high = mid - 1) : (low = mid + 1);
    if (currentItem < minVal) minVal = currentItem;
  }
  return minVal;
};

console.log(findMin([3, 4, 5, 1, 2]));
