/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.maxCapacity = capacity;
  this.cache = {
    capacity: 0,
  };
  this.latest = null;
  this.head = null;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache[key] === undefined) {
    console.log('HELLO WORLD', ' HEAD = ', this.head, this.cache);
    return -1;
  }
  this.updateLatestPriority(key);
  this.latest = key;
  return this.cache[key].value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache[key]) {
    if (this.cache[this.latest]) this.cache[this.latest].next = key;
    this.cache[key] = { prev: this.latest, next: null, value };
    this.latest = key;
    return this.cache;
  }

  if (this.cache.capacity === this.maxCapacity) {
    this.updatedOverflow();
  }
  this.addNode(key, value);
  return this.cache;
};

LRUCache.prototype.addNode = function (key, value) {
  if (this.cache.capacity === 0) this.head = key;

  if (this.cache[this.latest]) this.cache[this.latest].next = key;

  this.cache[key] = { prev: this.latest, next: null, value };
  this.latest = key;
  this.cache.capacity++;
};

LRUCache.prototype.updateLatestPriority = function (key) {
  const prevKey = this.cache[key];
  this.cache[key] = { ...prevKey, prev: this.latest, next: null };

  this.cache[this.latest] = { ...this.cache[this.latest], prev: prevKey.prev, next: key };
  this.latest = key;
  if (key === this.head) {
    this.head = prevKey.prev;
  }
};

LRUCache.prototype.updatedOverflow = function () {
  const head = this.cache[this.head];
  delete this.cache[this.head];

  if (this.head) this.head = head.next;

  this.cache.capacity--;
};
console.log('NEWWWWWWWWWWWWWWWWWWWWWWWWWWWWW1');

const lruCache = new LRUCache(2);
console.log(lruCache.put(1, 1)); // cache is {1=1}
console.log(lruCache.put(2, 2)); // cache is {1=1, 2=2}
console.log(lruCache.get(1)); // return 1
console.log(lruCache.put(3, 3)); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
console.log(lruCache.get(2)); // returns -1 (not found)
console.log(lruCache.put(4, 4)); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
console.log(lruCache.get(1)); // return -1 (not found)
console.log(lruCache.get(3)); // return 3
console.log(lruCache.get(4)); // return 4

console.log('NEWWWWWWWWWWWWWWWWWWWWWWWWWWWWW2');
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const lruCache2 = new LRUCache(1);
console.log(lruCache2.put(2, 1)); // cache is {2=1}
console.log(lruCache2.get(2)); // return 1
console.log(lruCache2.put(3, 2)); // LRU key was 2, evicts key 2, cache is { 3=2}
console.log(lruCache2.get(2)); // -1
console.log(lruCache2.get(3)); // 2

console.log('NEWWWWWWWWWWWWWWWWWWWWWWWWWWWWW3');

const lruCache3 = new LRUCache(2);
console.log(lruCache3.get(2)); // return -1
console.log(lruCache3.put(2, 6)); // cache is {2=6}
console.log(lruCache3.get(1)); // return -1
console.log(lruCache3.put(1, 5)); // cache is {2=6, 1=5}
console.log(lruCache3.put(1, 2)); // cache is {1=2, 1=5}
console.log(lruCache3.get(1)); // 2
console.log(lruCache3.get(2)); // -1

['LRUCache', 'put', 'put', 'put', 'put', 'get', 'get'][([2], [2, 1], [1, 1], [2, 3], [4, 1], [1], [2])];

console.log('NEWWWWWWWWWWWWWWWWWWWWWWWWWWWWW4');

const lruCache4 = new LRUCache(2);
console.log(lruCache4.get(2)); // return -1
console.log(lruCache4.put(2, 1)); // cache is {2=1}
console.log(lruCache4.put(1, 1)); // cache is {2=6}
console.log(lruCache4.put(2, 3)); // cache is {2=6}
console.log(lruCache4.put(4, 1)); // cache is {2=6}
console.log(lruCache4.get(1)); // -1
console.log(lruCache4.get(2)); // 3
console.log(lruCache4.get(4)); // 1

console.log('NEWWWWWWWWWWWWWWWWWWWWWWWWWWWWW5');

const lruCache5 = new LRUCache(3);
console.log(lruCache5.put(1, 1)); //
console.log(lruCache5.put(2, 2)); //
console.log(lruCache5.put(3, 3)); //
console.log(lruCache5.put(4, 4)); //
console.log(lruCache5.get(4)); // 4
console.log(lruCache5.get(3)); // 3
console.log(lruCache5.get(2)); // 2
console.log(lruCache5.get(1)); // -1
console.log(lruCache5.put(5, 5)); //
console.log(lruCache5.get(1)); // -1
console.log(lruCache5.get(2)); // 2
console.log(lruCache5.get(3)); // 3
console.log(lruCache5.get(4)); // -1
console.log(lruCache5.get(5)); // 5
