/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const value = this.cache.get(key);
  if (value === undefined) return -1;

  this.cache.delete(key);
  this.cache.set(key, value);

  return value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  this.cache.delete(key);

  if (this.capacity === this.cache.size) {
    const [oldestKey] = this.cache.keys();
    this.cache.delete(oldestKey);
  }

  this.cache.set(key, value);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
