class Logger {
  constructor() {
    this.DEFAULT_TIME = 10;
    this.CACHE = {};
  }
  /**
   * @param {number} timestamp
   * @param {string} message
   * @return {boolean}
   */
  shouldPrintMessage(timestamp, message) {
    if (this.CACHE[message] !== undefined && timestamp < this.CACHE[message])
      return false;

    this.CACHE[message] = timestamp + this.DEFAULT_TIME;

    return true;
  }
}

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
