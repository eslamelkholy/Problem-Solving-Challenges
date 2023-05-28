// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var permute = function (nums) {
//   const result = [];

//   backtrack(nums, result, []);

//   return result;
// };

// const backtrack = (nums, result, currentPermute) => {
//   if (currentPermute.length === nums.length) {
//     return result.push(currentPermute);
//   }

//   for (const num of nums) {
//     if (currentPermute.includes(num)) continue;

//     currentPermute.push(num);

//     backtrack(nums, result, [...currentPermute]);

//     currentPermute.pop();
//   }
// };

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];

  backtrack(nums, result, [], new Array(nums.length).fill(false));

  return result;
};

const backtrack = (nums, result, currentPermute, visited) => {
  if (currentPermute.length === nums.length) {
    return result.push([...currentPermute]);
  }

  for (let i = 0; i < nums.length; i++) {
    if (visited[i] === true) continue;

    currentPermute.push(nums[i]);
    visited[i] = true;

    backtrack(nums, result, currentPermute, visited);

    visited[i] = false;
    currentPermute.pop();
  }
};

console.log(permute((nums = [1, 2, 3])));
