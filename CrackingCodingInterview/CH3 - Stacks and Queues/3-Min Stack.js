class MinStack {
  constructor() {
    this.stack = [];
  }
  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.stack.push(val);
  }
  /**
   * @return {void}
   */
  pop() {
    this.stack.pop();
  }
  /**
   * @return {number}
   */
  top() {
    return this.stack[this.stack.length - 1];
  }
  /**
   * @return {number}
   */
  getMin() {
    return Math.min(...this.stack);
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
