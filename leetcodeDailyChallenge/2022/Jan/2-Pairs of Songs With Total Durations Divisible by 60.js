/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
  let result = 0;
  const numMap = {};

  for (let i = 0; i < time.length; i++) {
    result += numMap[(60 - (time[i] % 60)) % 60] || 0;

    numMap[time[i] % 60] = numMap[time[i] % 60] ? numMap[time[i] % 60] + 1 : 1;
  }
  return result;
};

console.log(numPairsDivisibleBy60([30, 20, 150, 100, 40]));
console.log(numPairsDivisibleBy60([60, 60, 60]));
