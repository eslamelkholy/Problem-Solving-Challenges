class MedianFinder {
  constructor() {
    this.values = [];
  }
  /**
   * @param {number} num
   * @return {void}
   */
  addNum(num) {
    this.values.push(num);
  }
  /**
   * @return {number}
   */
  findMedian() {
    this.values.sort((a, b) => a - b);
    const middle = this.values.length / 2;

    if (this.values.length % 2 === 0) {
      return (this.values[Math.floor(middle)] + this.values[Math.floor(middle) - 1]) / 2;
    }
    return this.values[Math.floor(middle)];
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

const { MinPriorityQueue, MaxPriorityQueue } = require("@datastructures-js/priority-queue");
class MedianFinder {
  constructor() {
    this.minPQ = new MinPriorityQueue({ priority: (num) => num });
    this.maxPQ = new MaxPriorityQueue({ priority: (num) => num });
  }
  /**
   * @param {number} num
   * @return {void}
   */
  addNum(num) {
    this.maxPQ.enqueue(num); // 1- Add it to Max

    this.minPQ.enqueue(this.maxPQ.front().element); // 2- Get max Value add it To Min

    this.maxPQ.dequeue(); // 3- Remove it From Max

    if (this.maxPQ.size() < this.minPQ.size()) {
      // 4-Balance Size Priority
      this.maxPQ.enqueue(this.minPQ.front().element);
      this.minPQ.dequeue();
    }
  }
  /**
   * @return {number}
   */
  findMedian() {
    if (this.maxPQ.size() > this.minPQ.size()) {
      return this.maxPQ.front().element;
    }
    return (this.maxPQ.front().element + this.minPQ.front().element) * 0.5;
  }
}

const medianFinder = new MedianFinder();
console.log(medianFinder.addNum(1)); // arr = [1]
console.log(medianFinder.addNum(2)); // arr = [1, 2]
console.log(medianFinder.findMedian()); // return 1.5 (i.e., (1 + 2) / 2)
console.log(medianFinder.addNum(3)); // arr[1, 2, 3]
console.log(medianFinder.findMedian()); // return 2.0

const medianFinder = new MedianFinder();
console.log(medianFinder.addNum(1)); // arr = [1]
console.log(medianFinder.addNum(2)); // arr = [1, 2]
console.log(medianFinder.findMedian()); // return 1.5 (i.e., (1 + 2) / 2)
console.log(medianFinder.addNum(3)); // arr[1, 2, 3]
console.log(medianFinder.findMedian()); // return 2.0
