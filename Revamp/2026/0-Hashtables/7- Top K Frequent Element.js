/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const freqMap = {};
  const result = [];
  const maxPQ = new MaxPriorityQueue((bid) => bid.value);

  for (const num of nums) {
    if (freqMap[num] === undefined) {
      freqMap[num] = 1;
    } else {
      freqMap[num]++;
    }
  }

  for (const key in freqMap) {
    maxPQ.enqueue({ key, value: freqMap[key] });
  }

  while (k > 0) {
    result.push(Number(maxPQ.dequeue().key));
    k--;
  }

  return result;
};
