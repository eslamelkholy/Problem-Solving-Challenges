#### Arranging Coins

https://leetcode.com/problems/arranging-coins/

```javascript
var arrangeCoins = function (n) {
  let currentRow = 0;
  for (let i = 0; i < n; i++) {
    currentRow++;
    n -= currentRow;
  }
  return currentRow;
};
```

#### Single Number III

https://leetcode.com/problems/single-number-iii/

```javascript
var singleNumber = function (nums) {
  const numMap = {};
  const result = [];

  for (const num of nums) numMap[num] ? numMap[num]++ : (numMap[num] = 1);

  for (const numKey in numMap) if (numMap[numKey] === 1) result.push(parseInt(numKey));

  return result;
};
```

#### MaxProfit

https://leetcode.com/problems/single-number-iii/

```javascript
var maxProfit = function (prices) {
  let maxVal = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[i + 1]) {
      maxVal += prices[i + 1] - prices[i];
    }
  }
  return maxVal;
};
```

#### Minimum Value to Get Positive Step by Step Sum

https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum

```javascript
var minStartValue = function (nums) {
  let initVal = 1;
  let sum = 0;
  for (const num of nums) {
    sum += num;

    initVal = Math.max(1 - sum, initVal);
  }

  return initVal;
};
```
