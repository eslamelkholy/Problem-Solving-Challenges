/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();
  const maxPQ = new MaxPriorityQueue((bid) => bid.value);
  const result = [];

  for (const num of nums) {
    map.set(num, map.get(num) !== undefined ? map.get(num) + 1 : 1);
  }

  for (const [key, value] of map) {
    maxPQ.enqueue({ key, value });
  }

  while (k > 0) {
    result.push(maxPQ.dequeue().key);
    k--;
  }

  return result;
};
