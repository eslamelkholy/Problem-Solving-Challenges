/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const [destStart, destEnd] = newInterval;
  const result = [];
  const merged = [Infinity, 0];

  intervals.push(newInterval);
  intervals.sort((a, b) => a[0] - b[0] && a[1] - b[1]);

  for (let i = 0; i < intervals.length; i++) {
    const [start, end] = intervals[i];

    if (start <= destEnd && end >= destStart) {
      if (merged[0] !== Infinity) result.pop();
      merged[0] = Math.min(start, destStart, merged[0]);
      merged[1] = Math.max(end, destEnd, merged[1]);
      result.push(merged);
    } else {
      result.push(intervals[i]);
    }
  }
  return result;
};
