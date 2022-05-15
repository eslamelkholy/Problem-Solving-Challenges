/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];

  const getSubsets = (index, set) => {
    result.push(set);

    for (let i = index; i < nums.length; i++) {
      getSubsets(i + 1, [...set, nums[i]]);
    }
  };

  getSubsets(0, []);

  return result;
};
console.log(subsets([1, 2, 3]));
console.log(subsets([0]));
