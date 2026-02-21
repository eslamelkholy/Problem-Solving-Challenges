/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  const results = [];
  const minPQ = new MinPriorityQueue((ele) => ele.priority);

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      minPQ.enqueue({ element: `${i},${j}`, priority: nums1[i] + nums2[j] });
    }
  }

  while (k > 0) {
    const [x, y] = minPQ.dequeue().element.split(',');
    results.push([nums1[x], nums2[y]]);

    k--;
  }

  return results;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  const results = [];
  const minPQ = new MinPriorityQueue((ele) => ele.priority);

  for (let i = 0; i < nums1.length; i++) {
    minPQ.enqueue({
      x: i,
      y: 0,
      priority: nums1[i] + nums2[0],
    });
  }

  while (k > 0 && minPQ.size() > 0) {
    const { x, y, priority } = minPQ.dequeue();

    results.push([nums1[x], nums2[y]]);

    if (y + 1 < nums2.length) {
      minPQ.enqueue({
        x,
        y: y + 1,
        priority: nums1[x] + nums2[y + 1],
      });
    }

    k--;
  }

  return results;
};
