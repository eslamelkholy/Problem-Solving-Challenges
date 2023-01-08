const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const numMap = {};
  const mpq = new MaxPriorityQueue({ priority: (element) => element.value });
  const result = [];

  for (const num of nums) {
    numMap[num] === undefined ? (numMap[num] = 1) : numMap[num]++;
  }

  for (const key in numMap) {
    mpq.enqueue(parseInt(key), numMap[key]);
  }

  for (let i = 0; i < k; i++) {
    result.push(mpq.dequeue().element);
  }
  return result;
};
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
