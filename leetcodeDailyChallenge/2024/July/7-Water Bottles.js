/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  let bottels = numBottles;
  let exchange = 0;
  let drink = 0;

  while (bottels > 0) {
    exchange++;
    if (exchange === numExchange) {
      bottels++;
      exchange = 0;
      drink++;
    }

    bottels--;
  }

  return drink + numBottles;
};
