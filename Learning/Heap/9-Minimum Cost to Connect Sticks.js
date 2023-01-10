/**
 * @param {number[]} sticks
 * @return {number}
 */
var connectSticks = function (sticks) {
  const connected = [];

  while (sticks.length > 1) {
    sticks.sort((a, b) => b - a);
    const s1 = sticks.pop();
    const s2 = sticks.pop();
    const sum = s1 + s2;
    connected.push(sum);
    sticks.push(sum);
  }

  return connected.reduce((a, b) => a + b, 0);
};

/**
 * @param {number[]} sticks
 * @return {number}
 */
var connectSticks = function (sticks) {
  const minPQ = new MinPriorityQueue({ priority: (stick) => stick });
  sticks.forEach((stick) => minPQ.enqueue(stick));

  let sum = 0;

  while (minPQ.size() > 1) {
    const s1 = minPQ.dequeue().element;
    const s2 = minPQ.dequeue().element;
    const total = s1 + s2;
    minPQ.enqueue(total);

    sum += s1 + s2;
  }

  return sum;
};
