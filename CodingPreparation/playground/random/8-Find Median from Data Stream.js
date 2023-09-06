const { MaxPriorityQueue, MinPriorityQueue } = require("@datastructures-js/priority-queue");

class MedianFinder {
  constructor() {
    this.minPQ = new MinPriorityQueue({ priority: (diff) => diff });
    this.maxPQ = new MaxPriorityQueue({ priority: (diff) => diff });
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
    if (this.maxPQ.size() > this.minPQ.size()) return this.maxPQ.front().element;

    return (this.maxPQ.front().element + this.minPQ.front().element) / 2;
  }
}

const medianFinder = new MedianFinder();
medianFinder.addNum(1); // arr = [1]
medianFinder.addNum(2); // arr = [1, 2]
console.log(medianFinder.findMedian()); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3); // arr[1, 2, 3]
console.log(medianFinder.findMedian()); // return 2.0
