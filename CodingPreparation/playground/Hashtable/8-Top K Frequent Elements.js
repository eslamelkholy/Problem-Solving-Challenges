const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const maxFreqPQ = new MaxPriorityQueue({ priority: (element) => element });
  const numMap = {};
  const result = [];

  for (const num of nums) {
    numMap[num]++ || (numMap[num] = 1);
  }

  for (const key in numMap) {
    maxFreqPQ.enqueue(key, numMap[key]);
  }

  for (let i = 0; i < k; i++) {
    result.push(Number(maxFreqPQ.dequeue().element));
  }

  return result;
};

console.log(topKFrequent((nums = [1, 1, 1, 2, 2, 3]), (k = 2)));
console.log(topKFrequent((nums = [-1, -1]), (k = 1)));
