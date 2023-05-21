const { MinPriorityQueue, MaxPriorityQueue } = require("@datastructures-js/priority-queue");

var MedianFinder = function () {
  this.minPQ = new MinPriorityQueue({ priority: (diff) => diff });
  this.maxPQ = new MaxPriorityQueue({ priority: (diff) => diff });
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  this.maxPQ.enqueue(num);

  this.minPQ.enqueue(this.maxPQ.dequeue().element);

  if (this.maxPQ.size() < this.minPQ.size()) {
    this.maxPQ.enqueue(this.minPQ.dequeue().element);
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.maxPQ.size() > this.minPQ.size()) return this.maxPQ.front().element;

  return (this.maxPQ.front().element + this.minPQ.front().element) / 2;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
const medianFinder = new MedianFinder();
medianFinder.addNum(1); // arr = [1]
medianFinder.addNum(2); // arr = [1, 2]
console.log(medianFinder.findMedian()); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3); // arr[1, 2, 3]
console.log(medianFinder.findMedian()); // return 2.0
