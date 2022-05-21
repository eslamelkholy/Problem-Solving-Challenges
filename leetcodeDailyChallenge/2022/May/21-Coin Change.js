/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function (coins, amount) {
  const table = new Array(amount + 1).fill(Infinity);

  table[0] = 0;

  for (const coin of coins) {
    for (let i = coin; i < table.length; i++) {
      table[i] = Math.min(table[i], 1 + table[i - coin]);
    }
  }

  return table[table.length - 1] !== Infinity ? table[table.length - 1] : -1;
};

console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([2], 3));
console.log(coinChange([1], 0));
