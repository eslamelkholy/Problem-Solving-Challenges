/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  const leftEven = [];
  const rightOdd = [];
  for (const num of nums) {
    if (num % 2 === 0) leftEven.push(num);
    else rightOdd.push(num);
  }

  return [...leftEven, ...rightOdd];
};

console.log(sortArrayByParity([3, 1, 2, 4]));
console.log(sortArrayByParity([0]));
