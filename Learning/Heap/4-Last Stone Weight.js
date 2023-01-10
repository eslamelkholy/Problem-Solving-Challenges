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
