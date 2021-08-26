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
