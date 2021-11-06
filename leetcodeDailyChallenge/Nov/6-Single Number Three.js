/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  const numMap = {};
  const result = [];

  for (const num of nums) numMap[num] ? numMap[num]++ : (numMap[num] = 1);

  for (const numKey in numMap) if (numMap[numKey] === 1) result.push(parseInt(numKey));

  return result;
};

console.log(singleNumber([1, 2, 1, 3, 2, 5]));
