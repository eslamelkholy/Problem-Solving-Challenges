/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
  costs.sort((a, b) => a - b);
  let iceCreams = 0;

  for (const cost of costs) {
    if (coins === 0) break;
    if (coins - cost < 0) continue;

    iceCreams++;
    coins -= cost;
  }
  return iceCreams;
};

/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
  costs.sort((a, b) => a - b);
  let iceCreams = 0;

  for (const cost of costs) {
    if (coins === 0 || cost > coins) break;

    iceCreams++;
    coins -= cost;
  }

  return iceCreams;
};
