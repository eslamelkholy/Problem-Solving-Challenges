/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.maxCapacity = capacity;
  this.cache = {
    capacity: 0,
    latest: -1,
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
  if (key === 6) {
    console.log('HEREEEEEEEEEEEEEEEEEEEEE');
    console.log('HEREEEEEEEEEEEEEEEEEEEEE');
    console.log('HEREEEEEEEEEEEEEEEEEEEEE');
    console.log('HEREEEEEEEEEEEEEEEEEEEEE');
    console.log('HEREEEEEEEEEEEEEEEEEEEEE');
    console.log('HEREEEEEEEEEEEEEEEEEEEEE');
    console.log('HEREEEEEEEEEEEEEEEEEEEEE');
    console.log('HEREEEEEEEEEEEEEEEEEEEEE');
    console.log('HEREEEEEEEEEEEEEEEEEEEEE');
    console.log(this.cache);
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
    return 1;
  }

  if (this.cache.capacity === this.maxCapacity) {
    this.updatedOverflow();
  }
  this.addNode(key, value);
  return 1;
};

// Tested and Works Fine
LRUCache.prototype.addNode = function (key, value) {
  this.cache.capacity++;

  if (this.cache.latest === -1) {
    this.cache[key] = { value, next: null, prev: null };
    this.cache['latest'] = key;
    this.cache['head'] = key;
    return;
  }

  const latestTemp = this.cache.latest;
  this.cache[key] = { value, next: null, prev: latestTemp }; // 1- Set this one to be the latest
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

  // If Previous Exists
  if (this.cache[prevOfCurrentNode]) {
    this.cache[prevOfCurrentNode].next = currentNode.next; // Update Previous Next to Point to Latest
  }

  this.cache[key] = { ...currentNode, prev: latestTemp, next: null }; // 3- Update Node to be the last One
  this.cache.latest = key;
};

LRUCache.prototype.updatedOverflow = function () {
  const head = this.cache.head;
  const currentHeadNode = this.cache[head];
  delete this.cache[head];
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

console.log('BIG TO TRACEEEEEEEEEEEEEEEE');
const lruCache6 = new LRUCache(10);
console.log(lruCache6.put(10, 13)); // cache is {2=1}
console.log(lruCache6.put(3, 17)); // cache is {2=1}
console.log(lruCache6.put(6, 11)); // cache is {2=1}
console.log(lruCache6.put(10, 5)); // cache is {2=1}
console.log(lruCache6.put(9, 10)); // cache is {2=1}
console.log(lruCache6.get(13)); // cache is {2=1}
console.log(lruCache6.put(2, 19)); // cache is {2=1}
console.log(lruCache6.get(2)); // cache is {2=1}
console.log(lruCache6.get(3)); // cache is {2=1}
console.log(lruCache6.put(5, 25)); // cache is {2=1}
console.log(lruCache6.get(8)); // cache is {2=1}
console.log(lruCache6.put(9, 22)); // cache is {2=1}
console.log(lruCache6.put(5, 5)); // cache is {2=1}
console.log(lruCache6.put(1, 30)); // cache is {2=1}
console.log(lruCache6.get(11)); // cache is {2=1}
console.log(lruCache6.put(9, 12)); // cache is {2=1}
console.log(lruCache6.get(7)); // cache is {2=1}
console.log(lruCache6.get(5)); // cache is {2=1}
console.log(lruCache6.get(8)); // cache is {2=1}
console.log(lruCache6.get(9)); // cache is {2=1}
console.log(lruCache6.put(4, 30)); // cache is {2=1}
console.log(lruCache6.put(9, 3)); // cache is {2=1}
console.log(lruCache6.get(9)); // cache is {2=1}
console.log(lruCache6.get(10)); // cache is {2=1}
console.log(lruCache6.get(10)); // cache is {2=1}
console.log(lruCache6.put(6, 14)); // cache is {2=1}
console.log(lruCache6.put(3, 1)); // cache is {2=1}
console.log(lruCache6.get(3)); // cache is {2=1}
console.log(lruCache6.put(10, 11)); // cache is {2=1}
console.log(lruCache6.get(8)); // cache is {2=1}
console.log(lruCache6.put(2, 11)); // cache is {2=1}
console.log(lruCache6.get(1)); // cache is {2=1}
console.log(lruCache6.get(5)); // cache is {2=1}
console.log(lruCache6.get(4)); // cache is {2=1}
console.log(lruCache6.put(11, 4)); // cache is {2=1}
console.log(lruCache6.put(12, 24)); // cache is {2=1}
console.log(lruCache6.put(5, 18)); // cache is {2=1}
console.log(lruCache6.get(13)); // cache is {2=1}
console.log(lruCache6.put(7, 23)); // cache is {2=1}
console.log(lruCache6.get(8)); // cache is {2=1}
console.log(lruCache6.get(12)); // cache is {2=1}
console.log(lruCache6.put(3, 27)); // cache is {2=1}
console.log(lruCache6.put(2, 12)); // cache is {2=1}
console.log(lruCache6.get(5)); // cache is {2=1}
console.log(lruCache6.put(2, 9)); // cache is {2=1}
console.log(lruCache6.put(13, 4)); // cache is {2=1}
console.log(lruCache6.put(8, 18)); // cache is {2=1}
console.log(lruCache6.put(1, 7)); // cache is {2=1}
console.log(lruCache6.get(6)); // cache is {2=1}
console.log(lruCache6.put(9, 29)); // cache is {2=1}
console.log(lruCache6.put(8, 21)); // cache is {2=1}
console.log(lruCache6.get(5)); // cache is {2=1}
console.log(lruCache6.put(6, 30)); // cache is {2=1}
console.log(lruCache6.put(1, 12)); // cache is {2=1}
console.log(lruCache6.get(10)); // cache is {2=1}
console.log(lruCache6.put(4, 15)); // cache is {2=1}
console.log(lruCache6.put(7, 22)); // cache is {2=1}
console.log(lruCache6.put(11, 26)); // cache is {2=1}
console.log(lruCache6.put(8, 17)); // cache is {2=1}
console.log(lruCache6.put(9, 29)); // cache is {2=1}
console.log(lruCache6.get(5)); // cache is {2=1}
console.log(lruCache6.put(3, 4)); // cache is {2=1}
console.log(lruCache6.put(11, 30)); // cache is {2=1}
console.log(lruCache6.get(12)); // cache is {2=1}
console.log(lruCache6.put(4, 29)); // cache is {2=1}
console.log(lruCache6.get(3)); // cache is {2=1}
console.log(lruCache6.get(9)); // cache is {2=1}
console.log(lruCache6.get(6)); // cache is {2=1}
console.log(lruCache6.put(3, 4)); // cache is {2=1}
console.log(lruCache6.get(1)); // cache is {2=1}
console.log(lruCache6.get(10)); // cache is {2=1}
console.log(lruCache6.put(3, 29)); // cache is {2=1}
console.log(lruCache6.put(10, 28)); // cache is {2=1}
console.log(lruCache6.put(1, 20)); // cache is {2=1}
console.log(lruCache6.put(11, 13)); // cache is {2=1}
console.log(lruCache6.get(3)); // cache is {2=1}

// ["LRUCache","put","put","put","put","put","get","put","get","get","put","get","put","put","put","get","put","get","get","get","get","put","put","get","get","get","put","put","get","put","get","put","get","get","get","put","put","put","get","put","get","get","put","put","get","put","put","put","put","get","put","put","get","put","put","get","put","put","put","put","put","get","put","put","get","put","get","get","get","put","get","get","put","put","put","put","get","put","put","put","put","get","get","get","put","put","put","get","put","put","put","get","put","put","put","get","get","get","put","put","put","put","get","put","put","put","put","put","put","put"]
// [[3,12],[3,8],[10,9],[3,26],[8],[7],[5],[13,17],[2,27],[11,15],[12],[9,19],[2,15],[3,16],[1],[12,17],[9,1],[6,19],[4],[5],[5],[8,1],[11,7],[5,2],[9,28],[1],[2,2],[7,4],[4,22],[7,24],[9,26],[13,28],[11,26]]
