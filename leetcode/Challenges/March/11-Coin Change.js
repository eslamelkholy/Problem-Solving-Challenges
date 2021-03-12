/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

/**
 * Explain
 * Why We Chose min = amount + 1
 * That's Because we are going to Use Math Min to Pick Up The Smallest coin
 * and Prevent Integer Overflow
 * https://www.youtube.com/watch?v=CnSKbWOgw00&t=92s&ab_channel=LeetDev
 */
var coinChange = function (coins, amount) {
  const coinContainer = [0, ...Array(amount).fill(amount + 1)];
  for (let i = 1; i <= amount; i++)
    for (const coin of coins)
      if (i - coin >= 0) coinContainer[i] = Math.min(coinContainer[i], coinContainer[i - coin] + 1);

  return coinContainer[amount] === amount + 1 ? -1 : coinContainer[amount];
};

console.log(coinChange([1, 2, 5], 11));
// console.log(coinChange([2], 3));
// console.log(coinChange([1], 0));
// console.log(coinChange([1], 1));
// console.log(coinChange([2], 3));
