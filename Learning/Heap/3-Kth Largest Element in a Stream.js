/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.k = k;
  this.mpq = new MaxPriorityQueue();
  nums.forEach((num) => this.mpq.enqueue(num));
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  const elements = [];
  this.mpq.enqueue(val);

  for (let i = 0; i < this.k; i++) {
    elements.push(this.mpq.dequeue().element);
  }

  const result = elements[elements.length - 1];
  for (const element of elements) this.mpq.enqueue(element);

  return result;
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
