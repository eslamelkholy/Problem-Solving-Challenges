/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  const destroy = () => {
    if (stones.length <= 1) return;
    const [y, x] = stones;

    if (x === y) {
      stones.splice(0, 2);
    } else {
      stones.splice(1, 1);
      stones[0] = y - x;
      stones.sort((a, b) => b - a);
    }
    destroy();
  };

  destroy();

  return stones;
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
console.log(lastStoneWeight([2, 2]));
