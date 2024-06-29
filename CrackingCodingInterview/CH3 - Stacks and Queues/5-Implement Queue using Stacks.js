class MyQueue {
  constructor() {
    this.stack = [];
  }
  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.stack.push(x);
  }
  /**
   * @return {number}
   */
  pop() {
    const element = this.stack[0];
    this.stack.splice(0, 1);

    return element;
  }
  /**
   * @return {number}
   */
  peek() {
    return this.stack[0];
  }
  /**
   * @return {boolean}
   */
  empty() {
    return this.stack.length === 0;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
