const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const pq = new MaxPriorityQueue({ priority: (diff) => diff.priority });
  const freqMap = {};
  const result = [];

  for (const num of nums) {
    freqMap[num] ? freqMap[num]++ : (freqMap[num] = 1);
  }

  for (const key in freqMap) {
    pq.enqueue({ num: key, priority: freqMap[key] });
  }

  for (let i = 0; i < k; i++) {
    result.push(parseInt(pq.dequeue().element.num));
  }
  return result;
};

console.log(topKFrequent((nums = [1, 1, 1, 2, 2, 3]), (k = 2)));
