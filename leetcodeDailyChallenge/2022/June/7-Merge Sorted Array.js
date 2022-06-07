/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let leftPointer = m - 1;
  let rightPointer = n - 1;

  for (let i = nums1.length - 1; i >= 0; i--) {
    if (rightPointer < 0) break;

    if (leftPointer >= 0 && nums1[leftPointer] > nums2[rightPointer]) {
      nums1[i] = nums1[leftPointer];
      leftPointer--;
    } else {
      nums1[i] = nums2[rightPointer];
      rightPointer--;
    }
  }

  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

console.log(merge([1], 1, [], 0));
console.log(merge([0], 0, [1], 1));
console.log(merge([1, 0], 1, [2], 1));
console.log(merge([2, 0], 1, [1], 1));
