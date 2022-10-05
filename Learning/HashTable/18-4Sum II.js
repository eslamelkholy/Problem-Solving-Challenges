/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
  var map = {};
  var res = 0;
  var key = 0;

  for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < B.length; j++) {
      key = A[i] + B[j];
      map[key] = (map[key] || 0) + 1;
    }
  }

  for (var i = 0; i < C.length; i++) {
    for (var j = 0; j < D.length; j++) {
      key = -(C[i] + D[j]);
      res += map[key] || 0;
    }
  }

  return res;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let numOfFourSum = 0;
  const map = {};

  for (const num1 of nums1) {
    for (const num2 of nums2) {
      const sum = num1 + num2;
      map[sum] !== undefined ? map[sum]++ : (map[sum] = 1);
    }
  }

  for (const num3 of nums3) {
    for (const num4 of nums4) {
      const sum = num3 + num4;
      if (map[-sum] !== undefined) {
        numOfFourSum += map[-sum];
      }
    }
  }
  return numOfFourSum;
};
