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
const medianFinder = new MedianFinder();
console.log(medianFinder.addNum(1)); // arr = [1]
console.log(medianFinder.addNum(2)); // arr = [1, 2]
console.log(medianFinder.findMedian()); // return 1.5 (i.e., (1 + 2) / 2)
console.log(medianFinder.addNum(3)); // arr[1, 2, 3]
console.log(medianFinder.findMedian()); // return 2.0
