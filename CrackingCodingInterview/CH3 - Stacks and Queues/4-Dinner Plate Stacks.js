/**
 * @param {number} capacity
 */
var DinnerPlates = function (capacity) {
  this.capacity = capacity;
  this.dinner = [[]];
};

/**
 * @param {number} val
 * @return {void}
 */
DinnerPlates.prototype.push = function (val) {
  const N = this.dinner.length;

  if (this.dinner[N - 1].length === this.capacity) {
    this.dinner.push([]);
  }

  for (let i = 0; i < this.dinner.length; i++) {
    if (this.dinner[i].length === this.capacity) continue;

    this.dinner[i].push(val);
    break;
  }
};

/**
 * @return {number}
 */
DinnerPlates.prototype.pop = function () {
  for (let i = this.dinner.length - 1; i >= 0; i--) {
    if (this.dinner[i].length === 0) continue;

    return this.dinner[i].pop();
  }

  return -1;
};

/**
 * @param {number} index
 * @return {number}
 */
DinnerPlates.prototype.popAtStack = function (index) {
  if (this.dinner[index] === undefined || this.dinner[index].length === 0) return -1;

  const result = this.dinner[index].pop();

  return result;
};

/**
 * Your DinnerPlates object will be instantiated and called as such:
 * var obj = new DinnerPlates(capacity)
 * obj.push(val)
 * var param_2 = obj.pop()
 * var param_3 = obj.popAtStack(index)
 */

/**
 * @param {number} capacity
 */
var DinnerPlates = function (capacity) {
  this.capacity = capacity;
  this.dinner = [[]];
  this.minHeap = new MinPriorityQueue({ priority: (val) => val });
  this.maxHeap = new MaxPriorityQueue({ priority: (val) => val });
};

/**
 * @param {number} val
 * @return {void}
 */
DinnerPlates.prototype.push = function (val) {
  if (this.minHeap.size() === 0) {
    if (this.dinner[this.dinner.length - 1].length === this.capacity) {
      this.dinner.push([]);
    }

    this.dinner[this.dinner.length - 1].push(val);
  } else {
    const index = this.minHeap.dequeue().element;
    this.dinner[index].push(val);
  }
  this.maxHeap.clear();
};

/**
 * @return {number}
 */
DinnerPlates.prototype.pop = function () {
  if (this.maxHeap.size() === 0) {
    for (let i = this.dinner.length - 1; i >= 0; i--) {
      if (this.dinner[i].length === 0) continue;
      const result = this.dinner[i].pop();

      if (this.dinner[i].length > 0) this.maxHeap.enqueue(i);
      if (this.dinner[i].length === 0) {
        for (let j = i - 1; j >= 0; j--) {
          if (this.dinner[j].length > 0) {
            if (this.dinner[i].length === 0) this.minHeap.enqueue(j);
            this.maxHeap.enqueue(j);
            break;
          }
        }
      }

      return result || -1;
    }
    return -1;
  } else {
    const index = this.maxHeap.dequeue().element;
    if (index === -1) return -1;
    const result = this.dinner[index].pop();

    if (this.dinner[index].length > 0) this.maxHeap.enqueue(index);
    if (this.dinner[index].length === 0) {
      if (this.dinner[index].length === 0) this.minHeap.enqueue(index);

      for (let j = index - 1; j >= 0; j--) {
        if (this.dinner[j].length > 0) {
          this.maxHeap.enqueue(j);
          break;
        }
      }
    }

    return result || -1;
  }
};

/**
 * @param {number} index
 * @return {number}
 */
DinnerPlates.prototype.popAtStack = function (index) {
  if (this.dinner[index] === undefined || this.dinner[index].length === 0) return -1;

  const result = this.dinner[index].pop();
  this.minHeap.enqueue(index);

  return result;
};

/**
 * Your DinnerPlates object will be instantiated and called as such:
 * var obj = new DinnerPlates(capacity)
 * obj.push(val)
 * var param_2 = obj.pop()
 * var param_3 = obj.popAtStack(index)
 */
