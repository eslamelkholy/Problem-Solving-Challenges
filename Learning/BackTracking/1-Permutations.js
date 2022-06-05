/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute0 = function (nums) {
  const result = [];
  permuteDfs0(result, [], nums);

  return result;
};

const permuteDfs0 = (result, prefix, nums) => {
  if (prefix.length === nums.length) {
    return result.push(prefix);
  }

  for (const num of nums) {
    if (prefix.includes(num)) continue;

    permuteDfs0(result, [...prefix, num], nums);
  }
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute1 = function (nums) {
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

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute2 = function (nums) {
  const result = [];
  permuteDfs2(result, [], nums);

  return result;
};

/**
 * @param {[][]} result
 * @param {number[]} currentList
 * @param {number[]} nums
 * @return {void}
 */
const permuteDfs2 = (result, currentList, nums) => {
  if (currentList.length === nums.length) {
    return result.push(currentList);
  }

  for (const num of nums) {
    if (currentList.includes(num)) continue;

    currentList.push(num);

    permuteDfs2(result, [...currentList], nums);

    currentList.pop();
  }
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
  return permuteDFS([], nums, []);
};

/**
 *
 * @param {number[]} currentList
 * @param {number[]} nums
 * @param {number[][]} result
 */
const permuteDFS = (currentList, nums, result) => {
  if (currentList.length === nums.length) {
    return result.push([...currentList]);
  }

  for (const num of nums) {
    if (currentList.includes(num)) continue;

    currentList.push(num);

    permuteDFS(currentList, nums, result);

    currentList.pop();
  }
  return result;
};

console.log(permute([1, 2, 3]));
console.log(permute([0, 1]));
console.log(permute([1]));
