/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.maxPQ = new MinPriorityQueue({ priority: (diff) => diff });
  this.k = k;

  for (const num of nums) {
    this.maxPQ.enqueue(num);
  }

  this.removeGreaterThanK();
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.maxPQ.enqueue(val);

  this.removeGreaterThanK();

  return this.maxPQ.front().element;
};

KthLargest.prototype.removeGreaterThanK = function () {
  while (this.maxPQ.size() > this.k) {
    this.maxPQ.dequeue();
  }
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
