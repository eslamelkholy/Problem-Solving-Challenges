var TimeMap = function () {
  this.map = {};
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (this.map[key] === undefined) {
    this.map[key] = new Map();
  }
  this.map[key].set(timestamp, value);
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  if (this.map[key] === undefined) return "";

  if (this.map[key].get(timestamp) !== undefined) return this.map[key].get(timestamp);

  let prevTimestamp = 0;
  for (const [keyOfMap, valOfMap] of this.map[key]) {
    if (parseInt(keyOfMap) <= timestamp) {
      prevTimestamp = Math.max(prevTimestamp, parseInt(keyOfMap));
    }
  }
  if (prevTimestamp === 0) return "";

  return this.map[key].get(prevTimestamp);
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
