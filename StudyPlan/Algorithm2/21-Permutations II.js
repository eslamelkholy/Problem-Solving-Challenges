/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const permutations = [];
  nums.sort((x, y) => x - y);

  const permute = (arr, permutation) => {
    if (!arr.length) return permutations.push(permutation);

    let prev = -Infinity;

    for (let i = 0; i < arr.length; i++) {
      if (prev === arr[i]) continue;

      const newArr = arr.slice(0, i).concat(arr.slice(i + 1));
      permute(newArr, [...permutation, arr[i]]);

      prev = arr[i];
    }
  };

  permute(nums, []);

  return permutations;
};

// console.log(permuteUnique([1, 1, 2]));
console.log(permuteUnique([1, 2, 3]));
