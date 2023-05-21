const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  const maxPQ = new MaxPriorityQueue({ priority: (diff) => diff });

  for (const stone of stones) {
    maxPQ.enqueue(stone);
  }

  while (maxPQ.size() > 1) {
    const num1 = maxPQ.dequeue().element;
    const num2 = maxPQ.dequeue().element;

    if (num1 === num2) {
      continue;
    }

    maxPQ.enqueue(Math.abs(num1 - num2));
  }

  return maxPQ.size() > 0 ? maxPQ.dequeue().element : 0;
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
console.log(lastStoneWeight([1]));
console.log(lastStoneWeight([1, 3]));
