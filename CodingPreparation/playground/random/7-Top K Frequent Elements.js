const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const maxPQ = new MaxPriorityQueue({ priority: (ele) => ele });
  const freqMap = {};
  const result = [];

  for (const num of nums) {
    freqMap[num]++ || (freqMap[num] = 1);
  }

  for (const key in freqMap) {
    maxPQ.enqueue(key, freqMap[key]);
  }

  while (k > 0) {
    result.push(Number(maxPQ.dequeue().element));
    k--;
  }

  return result;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], (k = 2)));
