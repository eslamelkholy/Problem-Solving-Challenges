/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let numOfZeros = 0;
  for (let i = 0; i < nums.length - numOfZeros; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      numOfZeros++;
      i--;
    }
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0, 0, 1]));
console.log(moveZeroes([1, 0, 1]));
// console.log(moveZeroes([0]));
console.log(moveZeroes([0, 0]));

console.log(
  moveZeroes([
    -58305, -22022, 0, 0, 0, 0, 0, -76070, 42820, 48119, 0, 95708, -91393,
    60044, 0, -34562, 0, -88974,
  ])
);
