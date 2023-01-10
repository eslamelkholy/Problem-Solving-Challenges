/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  /**
   * Rules:
   * 1- x === y >> Both Gone
   * 2- x !== y >> x Gone and y = y - x  (x <= y)
   */
  while (stones.length > 1) {
    stones.sort((a, b) => b - a);
    const x = stones.shift();
    const y = stones.shift();

    if (x === y) continue;

    stones.push(x - y);
  }

  return stones;
};

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  /**
   * Rules:
   * 1- x === y >> Both Gone
   * 2- x !== y >> x Gone and y = y - x  (x <= y)
   */
  const mpq = new MaxPriorityQueue();
  stones.forEach((stone) => mpq.enqueue(stone));

  while (mpq.size() > 1) {
    const x = mpq.dequeue().element;
    const y = mpq.dequeue().element;

    if (x === y) continue;

    mpq.enqueue(x - y);
  }

  return [mpq.dequeue()?.element];
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
console.log(lastStoneWeight([1]));
console.log(lastStoneWeight([2, 2]));
