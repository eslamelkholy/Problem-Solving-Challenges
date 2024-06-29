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
