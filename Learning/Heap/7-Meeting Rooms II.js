/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
  const minPQ = new MinPriorityQueue({ priority: (stone) => stone });
  intervals.forEach((interval) => minPQ.enqueue(interval[1]));
  intervals.sort((a, b) => a[0] - b[0]);

  for (const [start] of intervals) {
    if (start >= minPQ.front().element) {
      minPQ.dequeue();
    }
  }

  return minPQ.size();
};
