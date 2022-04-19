/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
  const res = [];
  dfs(res, nums);
  return res;
};

const dfs = (res, nums, arr = []) => {
  if (nums.length === arr.length) return res.push([...arr]);

  for (const num of nums) {
    if (!arr.includes(num)) dfs(res, nums, [...arr, num]);
  }
};

const permute2 = function (nums) {
  const res = [];
  const dfs = (arr = []) => {
    if (nums.length === arr.length) return res.push([...arr]);

    for (const num of nums) {
      if (!arr.includes(num)) dfs([...arr, num]);
    }
  };
  dfs();

  return res;
};
console.log(permute([1, 2, 3]));
