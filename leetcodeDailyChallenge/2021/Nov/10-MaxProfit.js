var maxProfit = function (prices) {
  let maxVal = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[i + 1]) {
      maxVal += prices[i + 1] - prices[i];
    }
  }
  return maxVal;
};
