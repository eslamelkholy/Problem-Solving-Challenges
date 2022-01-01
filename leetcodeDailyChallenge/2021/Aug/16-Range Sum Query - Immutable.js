class NumArray {
  constructor(nums) {
    this.nums = nums;
    this.sums = { 0: nums[0] };
    for (let i = 1; i < nums.length; i++) {
      this.sums[i] = this.sums[i - 1] + this.nums[i];
    }
  }
  sumRange(left, right) {
    if (left == 0) return this.sums[right];
    return this.sums[right] - this.sums[left - 1];
  }
}
