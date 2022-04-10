/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotateTimeLimitExceed = function (nums, k) {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
};

// T.C: O(N)
// S.C: O(1)
/*
  Solution:
  1. Reverse the entire array.
  2. Reverse the first k elements.
  3. Reverse the rest.
*/
var rotate = function (nums, k) {
  k = k % nums.length;
  if (k === 0) {
    return;
  }

  nums.reverse();
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
};

const reverse = (arr, start, end) => {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++, end--;
  }
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
