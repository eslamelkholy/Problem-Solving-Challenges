/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = (nums) => {
  let freq = {
    duplicated: null,
    missing: null,
  };
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (freq[element]) freq['duplicated'] = element;
    else freq[element] = 1;
  }

  for (let j = 0; j < nums.length; j++) if (!freq[j + 1]) freq['missing'] = j + 1;

  return [freq['duplicated'], freq['missing']];
};

console.log(findErrorNums([1, 2, 2, 4])); // [2,3]
console.log(findErrorNums([1, 1])); // [1,2]
console.log(findErrorNums([2, 2])); // [2,1]
console.log(findErrorNums([3, 2, 2])); // [[2,1]
console.log(findErrorNums([2, 3, 2])); // [[2,1]
console.log(findErrorNums([3, 3, 1])); // [3,2]
