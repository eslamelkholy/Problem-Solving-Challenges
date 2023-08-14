const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const maxPQ = new MaxPriorityQueue({ priority: (element) => element });
  const numMap = {};
  const result = [];

  for (const num of nums) {
    numMap[num]++ || (numMap[num] = 1);
  }

  for (const key in numMap) {
    maxPQ.enqueue(key, numMap[key]); // Key and Priority
  }

  for (let i = 0; i < k; i++) {
    result.push(maxPQ.dequeue().element);
  }

  return result;
};

console.log(topKFrequent((nums = [1, 1, 1, 2, 2, 3]), (k = 2)));
console.log(topKFrequent((nums = [-1, -1]), (k = 1)));
