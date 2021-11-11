/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
  let initVal = 1;
  let sum = 0;
  for (const num of nums) {
    sum += num;

    initVal = Math.max(1 - sum, initVal);
  }

  return initVal;
};
