/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  const jewelsSet = new Set();
  let count = 0;
  for (const jewel of jewels) jewelsSet.add(jewel);
  for (const stone of stones) if (jewelsSet.has(stone)) count++;
  return count;
};
