/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const result = [];
  const maxPQ = new MaxPriorityQueue({ priority: (ele) => ele });

  const freqMap = {};
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
