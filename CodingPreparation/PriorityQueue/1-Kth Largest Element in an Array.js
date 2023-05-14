const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const pq = new MaxPriorityQueue({ priority: (diff) => diff });
  nums.forEach((num) => pq.enqueue(num));

  for (let i = 0; i < k - 1; i++) {
    pq.dequeue();
  }

  return pq.front().element;
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], (k = 2)));
