const { MinPriorityQueue, MaxPriorityQueue } = require("@datastructures-js/priority-queue");
/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function (heights, bricks, ladders) {
  const maxPQ = new MaxPriorityQueue({ priority: (diff) => diff });
  for (let i = 0; i < heights.length - 1; i++) {
    const diff = heights[i + 1] - heights[i];
    if (diff < 0) {
      continue;
    }
    maxPQ.enqueue(diff);

    bricks -= diff;

    if (bricks < 0 && ladders === 0) {
      return i;
    }

    if (bricks < 0) {
      bricks += maxPQ.dequeue().element;
      ladders--;
    }
  }
  return heights.length - 1;
};

console.log(furthestBuilding([1, 5, 1, 2, 3, 4, 10000], 4, 1));
