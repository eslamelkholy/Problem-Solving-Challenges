/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let sold = -Infinity;
  let held = -Infinity;
  let reset = 0;

  for (const price of prices) {
    const preSold = sold;

    sold = held + price;
    held = Math.max(held, reset - price);
    reset = Math.max(reset, preSold);
  }

  return Math.max(sold, reset);
};

console.log(maxProfit([1, 2, 3, 2, 2]));
console.log(maxProfit([1, 2, 3, 0, 2]));
