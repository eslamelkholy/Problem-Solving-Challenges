/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */

// Incorrect SOlution ALl Element in Array A MUST BE INCLUDED

var advantageCount = function (A, B) {
  let order = Array.from({ length: A.length }, (v, i) => i),
    ans = [],
    i = 0,
    j = B.length - 1;
  order.sort((a, b) => B[b] - B[a]);

  A.sort((a, b) => b - a);
  for (let index of order) ans[index] = A[i] > B[index] ? A[i++] : A[j--];
  return ans;
};
// console.log(advantageCount([2, 7, 11, 15], [1, 10, 4, 11]));  // [2,11,7,15]
console.log(advantageCount([12, 24, 8, 32], [13, 25, 32, 11])); // [24,32,8,12]
