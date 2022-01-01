/**
 * initialize your data structure here.
 */

class MedianFinderStraightForward {
  constructor() {
    this.nums = [];
  }
  addNum(num) {
    this.nums.push(num);
    this.nums.sort((a, b) => a - b);
  }
  findMedian() {
    const len = this.nums.length;
    if (len % 2 !== 0) return this.nums[Math.floor(len / 2)];
    return (this.nums[len / 2] + this.nums[len / 2 - 1]) / 2;
  }
}
class MedianFinderBinaryInsert {
  constructor() {
    this.nums = [];
  }
  addNum(num) {
    this.insert(num);
  }
  findMedian() {
    const len = this.nums.length;
    if (len % 2 !== 0) return this.nums[Math.floor(len / 2)];

    return (this.nums[len / 2] + this.nums[len / 2 - 1]) / 2;
  }
  insert(item) {
    let low = 0;
    let high = this.nums.length;
    while (low < high) {
      const mid = (low + high) >> 1;
      this.nums[mid] - item > 0 ? (high = mid) : (low = mid + 1);
    }
    this.nums.splice(low, 0, item);
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

const medianFinder = new MedianFinder();

// const testCases = ['MedianFinder', 'addNum', 'addNum', 'findMedian', 'addNum', 'findMedian'];
// const testCaseValue = [[], [1], [2], [], [3], []];

const testCases = [
  'MedianFinder',
  'addNum',
  'findMedian',
  'addNum',
  'findMedian',
  'addNum',
  'findMedian',
  'addNum',
  'findMedian',
  'addNum',
  'findMedian',
  'addNum',
  'findMedian',
  'addNum',
  'findMedian',
  'addNum',
  'findMedian',
  'addNum',
  'findMedian',
  'addNum',
  'findMedian',
  'addNum',
  'findMedian',
];

const testCaseValue = [
  [],
  [6],
  [],
  [10],
  [],
  [2],
  [],
  [6],
  [],
  [5],
  [],
  [0],
  [],
  [6],
  [],
  [3],
  [],
  [1],
  [],
  [0],
  [],
  [0],
  [],
];

for (let i = 0; i < testCases.length; i++) {
  if (testCases[i] === 'addNum') medianFinder.addNum(testCaseValue[i][0]);
  if (testCases[i] === 'findMedian') medianFinder.findMedian();
}
