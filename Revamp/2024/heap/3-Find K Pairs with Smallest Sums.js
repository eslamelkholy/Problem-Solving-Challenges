const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
// TODO: Time limit exceed solution

// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @param {number} k
//  * @return {number[][]}
//  */
// var kSmallestPairs = function (nums1, nums2, k) {
//   const minPQ = new MinPriorityQueue({ priority: (element) => element });
//   const result = [];

//   for (let i = 0; i < nums1.length; i++) {
//     for (let j = 0; j < nums2.length; j++) {
//       minPQ.enqueue(`${i},${j}`, nums1[i] + nums2[j]);
//     }
//   }

//   while (k > 0) {
//     const [x, y] = minPQ.dequeue().element.split(",");

//     result.push([nums1[x], nums2[y]]);
//     k--;
//   }

//   return result;
// };

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  const minPQ = new MinPriorityQueue({ priority: ([sum]) => sum });
  const result = [];

  for (let i = 0; i < nums1.length; i++) {
    minPQ.enqueue([nums1[i] + nums2[0], i, 0]);
  }

  while (k > 0 && !minPQ.isEmpty()) {
    const {
      element: [_, i, j],
    } = minPQ.dequeue();

    result.push([nums1[i], nums2[j]]);

    if (j + 1 < nums2.length) {
      minPQ.enqueue([nums1[i] + nums2[j + 1], i, j + 1]);
    }
    k--;
  }

  return result;
};
