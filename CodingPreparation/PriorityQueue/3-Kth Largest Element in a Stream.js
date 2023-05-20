const { MinPriorityQueue } = require("@datastructures-js/priority-queue");
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.k = k;
  this.maxPQ = new MinPriorityQueue({ priority: (diff) => diff });

  for (const num of nums) {
    this.maxPQ.enqueue(num);
  }
  this.removeElementsGreaterThanK();
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.maxPQ.enqueue(val);

  this.removeElementsGreaterThanK();

  return this.maxPQ.front().element;
};

KthLargest.prototype.removeElementsGreaterThanK = function () {
  while (this.maxPQ.size() > this.k) {
    this.maxPQ.dequeue();
  }
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
console.log(kthLargest.add(3)); // return 4
console.log(kthLargest.add(5)); // return 5
console.log(kthLargest.add(10)); // return 5
console.log(kthLargest.add(9)); // return 8
console.log(kthLargest.add(4)); // return 8
