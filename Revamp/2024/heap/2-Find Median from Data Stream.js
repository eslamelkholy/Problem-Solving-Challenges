const { MinPriorityQueue, MaxPriorityQueue } = require("@datastructures-js/priority-queue");

class MedianFinder {
  constructor() {
    this.minPQ = new MinPriorityQueue({ priority: (ele) => ele });
    this.maxPQ = new MaxPriorityQueue({ priority: (ele) => ele });
  }
  /**
   * @param {number} num
   * @return {void}
   */
  addNum(num) {
    this.maxPQ.enqueue(num);

    this.minPQ.enqueue(this.maxPQ.dequeue().element);

    if (this.maxPQ.size() < this.minPQ.size()) {
      this.maxPQ.enqueue(this.minPQ.dequeue().element);
    }
  }
  /**
   * @return {number}
   */
  findMedian() {
    if (this.maxPQ.size() > this.minPQ.size()) {
      return this.maxPQ.front().element;
    }

    return (this.maxPQ.front().element + this.minPQ.front().element) / 2;
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
