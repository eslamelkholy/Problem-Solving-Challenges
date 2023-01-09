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

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.k = k;
  this.mpq = new MinPriorityQueue({ priority: (val) => val });

  nums.forEach((num) => this.mpq.enqueue(num));
  while (this.mpq.size() > k) {
    this.mpq.dequeue();
  }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.mpq.enqueue(val);

  while (this.mpq.size() > this.k) this.mpq.dequeue();

  return this.mpq.front().element;
};
/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
