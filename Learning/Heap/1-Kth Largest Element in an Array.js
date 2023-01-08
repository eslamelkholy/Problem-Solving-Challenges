/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const pq = new MaxPriorityQueue();
  nums.forEach((num) => pq.enqueue(num));

  for (let i = 0; i < k - 1; i++) {
    pq.dequeue();
  }

  return pq.front().element;
};
