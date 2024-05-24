const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const maxPQ = new MaxPriorityQueue({ priority: (element) => element });

  for (const num of nums) {
    maxPQ.enqueue(num);
  }

  while (k > 1) {
    maxPQ.dequeue();
    k--;
  }

  return maxPQ.dequeue().element;
};

console.log(findKthLargest((nums = [3, 2, 1, 5, 6, 4]), (k = 2)));
