/**
 * @param {number[]} nums
 */
class Solution {
  constructor(nums) {
    this.nums = nums;
  }
  reset() {
    return this.nums;
  }
  // There are other good ways to do the task. For instance, there’s a great algorithm called Fisher-Yates shuffle.
  // The idea is to walk the array in the reverse order and swap each element with a random one before it:
  shuffle() {
    const shuffled = [...this.nums];
    for (let i = shuffled.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

const soln = new Solution([1, 2, 3]);
console.log(soln.shuffle());
console.log(soln.reset());
console.log(soln.shuffle());
