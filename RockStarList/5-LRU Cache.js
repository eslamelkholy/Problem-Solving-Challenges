/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.maxCapacity = capacity;
  this.cache = {
    capacity: 0,
    latest: null,
    head: null,
  };
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache[key] === undefined) {
    return -1;
  }
  this.updateLatestPriority(key);
  return this.cache[key].value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache[key]) {
    this.updateLatestPriority(key);
    this.cache[key].value = value;
    return this.cache;
  }

  if (this.cache.capacity === this.maxCapacity) {
    this.updatedOverflow();
  }
  this.addNode(key, value);
  return this.cache;
};

// Tested and Works Fine
LRUCache.prototype.addNode = function (key, value) {
  this.cache.capacity++;

  if (this.cache.latest === null) {
    this.cache[key] = { value, next: null, prev: null };
    this.cache['latest'] = key;
    this.cache['head'] = key;
    return;
  }

  const latestTemp = this.cache.latest;
  const prevNode = this.cache[latestTemp];

  this.cache[key] = { value, next: null, prev: prevNode.value }; // 1- Set this one to be the latest

  this.cache[latestTemp] = { ...this.cache[latestTemp], next: key }; // 2- Update Previous Latest

  this.cache['latest'] = key; // 3- Update Latest Pointer
};

// Tested and Works Fine
LRUCache.prototype.updateLatestPriority = function (key) {
  const latestTemp = this.cache.latest;
  const currentNode = this.cache[key];
  const prevOfCurrentNode = currentNode.prev;

  // Update Head if the Key is Equal to Head
  if (key === this.cache.head) {
    if (currentNode.next) this.cache.head = currentNode.next;
  }

  if (currentNode.next === null) return; // 2- This is Already the last Node

  this.cache[latestTemp] = { ...this.cache[latestTemp], next: key }; // 2- Update Last Node to be Before this Node

  if (this.cache[latestTemp].prev === key) {
    this.cache[latestTemp].prev = prevOfCurrentNode; // Update Previous Node to point to Next of Current Node
  }
  // If Previous Exists
  if (prevOfCurrentNode) {
    if (this.cache[prevOfCurrentNode]) this.cache[prevOfCurrentNode].next = currentNode.next; // Update Previous Next to Point to Latest
    if (this.cache[currentNode.next]) this.cache[currentNode.next].prev = prevOfCurrentNode;
  }

  this.cache[key] = { ...currentNode, prev: this.cache.latest, next: null }; // 3- Update Node to be the last One
  this.cache.latest = key;
};

LRUCache.prototype.updatedOverflow = function () {
  const currentHeadNode = this.cache[this.cache.head];
  delete this.cache[this.cache.head];
  this.cache.capacity--;

  if (!this.cache[this.cache.latest]) {
    this.cache.head = null;
    this.cache.latest = null;
    return;
  }

  const nextHead = currentHeadNode.next;
  this.cache[nextHead].prev = null; // Update next Head Prev Value

  this.cache.head = nextHead;
};

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
