var singleNumber = function (nums) {
  const map = new Map();
  for (const num of nums)
    map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1);

  for (const [key, value] of map) if (value === 1) return key;
};

var singleNumber = function (nums) {
  let ans = nums[0];

  for (let i = 1; i < nums.length; i++) {
    ans ^= nums[i];
  }

  return ans;
};
