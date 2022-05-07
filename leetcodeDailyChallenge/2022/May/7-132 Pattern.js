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

var find132pattern = function (nums) {
  // sanity check
  if (nums.length < 3) return false;

  let N2 = []; // potential candidates, number 2
  let N1 = [nums[0]]; // the smallest number, number 3

  for (let i = 1; i < nums.length; i++) {
    N1.push(Math.min(N1[N1.length - 1], nums[i]));
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    // number 3
    if (nums[i] > N1[i]) {
      // remove useless N2 candidates
      while (N2.length != 0 && N2[N2.length - 1] <= N1[i]) N2.pop();
      // found a pattern
      if (N2.length != 0 && N2[N2.length - 1] < nums[i]) return true;
      N2.push(nums[i]);
    }
  }
  return false;
};

console.log(find132pattern([1, 2, 3, 4]));
console.log(find132pattern([3, 1, 4, 2]));
console.log(find132pattern([-1, 3, 2, 0]));
