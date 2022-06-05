/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute0 = function (nums) {
  const result = [];
  permuteDfs(result, [], nums);

  return result;
};

const permuteDfs = (result, prefix, nums) => {
  if (prefix.length === nums.length) {
    return result.push(prefix);
  }

  for (const num of nums) {
    if (prefix.includes(num)) continue;

    permuteDfs(result, [...prefix, num], nums);
  }
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
  const result = [];
  const permuteDfs = (prefix, nums) => {
    if (prefix.length === nums.length) {
      return result.push(prefix);
    }

    for (const num of nums) {
      if (prefix.includes(num)) continue;

      permuteDfs([...prefix, num], nums);
    }
  };

  permuteDfs([], nums);

  return result;
};

console.log(permute([1, 2, 3]));
console.log(permute([0, 1]));
console.log(permute([1]));
