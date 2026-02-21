/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const maxPQ = new MaxPriorityQueue((element) => element);

  for (const num of nums) {
    maxPQ.enqueue(num);
  }

  while (k > 1) {
    maxPQ.dequeue();
    k--;
  }

  return maxPQ.dequeue();
};
