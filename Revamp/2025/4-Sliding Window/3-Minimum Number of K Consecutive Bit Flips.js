/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minKBitFlips = function (nums, k) {
  let flipped = false;
  let minFlips = 0;
  const queue = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (i >= queue[0]) {
      flipped = !flipped;
      queue.shift();
    }

    if (flipped) num = 1 - num;

    if (num === 0) {
      if (i + k > nums.length) return -1; // Break couldn't flip 0

      flipped = !flipped;
      queue.push(i + k);
      minFlips++;
    }
  }

  return minFlips;
};
