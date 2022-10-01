var Logger = function () {
  this.LOGGER_INIT_TIME = 10;
  this.logs = {};
};

/**
 * @param {number} timestamp
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function (timestamp, message) {
  if (this.logs[message] !== undefined && this.logs[message] > timestamp) return false;

  this.logs[message] = timestamp + this.LOGGER_INIT_TIME;

  return true;
};

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
