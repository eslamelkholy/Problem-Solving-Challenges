var MedianFinder = function () {
  this.maxPQ = new MaxPriorityQueue((ele) => ele);
  this.minPQ = new MinPriorityQueue((ele) => ele);
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  this.maxPQ.enqueue(num);
  this.minPQ.enqueue(this.maxPQ.dequeue());

  if (this.maxPQ.size() < this.minPQ.size()) {
    this.maxPQ.enqueue(this.minPQ.dequeue());
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.maxPQ.size() > this.minPQ.size()) {
    return this.maxPQ.front();
  }

  return (this.minPQ.front() + this.maxPQ.front()) / 2;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
