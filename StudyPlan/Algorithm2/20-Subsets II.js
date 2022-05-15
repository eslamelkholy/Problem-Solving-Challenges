/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b);
  const permute = (index, set) => {
    result.push(set);

    for (let i = index; i < nums.length; i++) {
      if (i > index && nums[i] === nums[i - 1]) continue;
      permute(i + 1, [...set, nums[i]]);
    }
  };

  permute(0, []);

  return result;
};

console.log(subsetsWithDup([1, 2, 2]));
console.log(subsetsWithDup([0]));
console.log(subsetsWithDup([4, 4, 4, 1, 4]));
