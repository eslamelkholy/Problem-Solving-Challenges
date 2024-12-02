/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function (nums, k) {
  let maxScore = 0;
  const maxPQ = new MaxPriorityQueue({ priority: (ele) => ele });

  for (const num of nums) maxPQ.enqueue(num);

  while (k > 0 && maxPQ.size() > 0) {
    const currentScore = maxPQ.dequeue().element;
    const num = Math.ceil(currentScore / 3);

    maxScore += currentScore;

    maxPQ.enqueue(num);
    k--;
  }

  return maxScore;
};
