/**
 * @param {number[]} nums
 * @return {number}
 */
const numberOfArithmeticSlices = (nums) => {
  let count = 0;
  let numberOfArthmetics = 0;
  for (let i = 0; i < nums.length; i++) {
    const diff1 = nums[i] - nums[i + 1];
    const diff2 = nums[i + 1] - nums[i + 2];
    if (diff1 === diff2) {
      count++;
      numberOfArthmetics += count;
    } else {
      count = 0;
    }
  }

  return numberOfArthmetics;
};
console.log(numberOfArithmeticSlices([1, 2, 3, 4]));
console.log(numberOfArithmeticSlices([1]));
