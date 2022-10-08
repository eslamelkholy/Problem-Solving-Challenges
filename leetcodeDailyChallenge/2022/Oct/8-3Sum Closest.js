/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  const N = nums.length;
  let diff = Number.MAX_SAFE_INTEGER;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let leftPointer = i + 1;
    let rightPointer = N - 1;

    while (leftPointer < rightPointer) {
      const sum = nums[i] + nums[leftPointer] + nums[rightPointer];

      if (Math.abs(target - sum) < Math.abs(diff)) {
        diff = target - sum;
      }

      if (sum < target) {
        leftPointer++;
      } else {
        rightPointer--;
      }
    }
  }

  return target - diff;
};
