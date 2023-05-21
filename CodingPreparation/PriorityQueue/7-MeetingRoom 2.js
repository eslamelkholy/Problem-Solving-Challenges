const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
  const minPQ = new MinPriorityQueue({ priority: (diff) => diff });

  for (const [start, end] of intervals) {
    minPQ.enqueue(end);
  }

  intervals.sort((a, b) => a[0] - b[0]);

  for (const [start] of intervals) {
    if (start >= minPQ.front().element) minPQ.dequeue();
  }

  return minPQ.size();
};

console.log(
  minMeetingRooms(
    (intervals = [
      [0, 30],
      [5, 10],
      [15, 20],
    ])
  )
);
