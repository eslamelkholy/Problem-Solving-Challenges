/**
 * @param {number} capacity
 */
var LRUCache0 = function (capacity) {
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
LRUCache0.prototype.get = function (key) {
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
LRUCache0.prototype.put = function (key, value) {
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
LRUCache0.prototype.addNode = function (key, value) {
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
LRUCache0.prototype.updateLatestPriority = function (key) {
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

LRUCache0.prototype.updatedOverflow = function () {
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

// console.log('NEWWWWWWWWWWWWWWWWWWWWWWWWWWWWW5');

// const LRUCache05 = new LRUCache0(3);
// console.log(LRUCache05.put(1, 1)); //
// console.log(LRUCache05.put(2, 2)); //
// console.log(LRUCache05.put(3, 3)); //
// console.log(LRUCache05.put(4, 4)); //
// console.log(LRUCache05.get(4)); // 4
// console.log(LRUCache05.get(3)); // 3
// console.log(LRUCache05.get(2)); // 2
// console.log(LRUCache05.get(1)); // -1
// console.log(LRUCache05.put(5, 5)); //
// console.log(LRUCache05.get(1)); // -1
// console.log(LRUCache05.get(2)); // 2
// console.log(LRUCache05.get(3)); // 3
// console.log(LRUCache05.get(4)); // -1
// console.log(LRUCache05.get(5)); // 5

// console.log('NEWWWWWWWWWWWWWWWWWWWWWWWWWWWWW1');

// const LRUCache0 = new LRUCache0(2);
// console.log(LRUCache0.put(1, 1)); // cache is {1=1}
// console.log(LRUCache0.put(2, 2)); // cache is {1=1, 2=2}
// console.log(LRUCache0.get(1)); // return 1
// console.log(LRUCache0.put(3, 3)); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// console.log(LRUCache0.get(2)); // returns -1 (not found)
// console.log(LRUCache0.put(4, 4)); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// console.log(LRUCache0.get(1)); // return -1 (not found)
// console.log(LRUCache0.get(3)); // return 3
// console.log(LRUCache0.get(4)); // return 4

// console.log('NEWWWWWWWWWWWWWWWWWWWWWWWWWWWWW3');

// const LRUCache03 = new LRUCache0(2);
// console.log(LRUCache03.get(2)); // return -1
// console.log(LRUCache03.put(2, 6)); // cache is {2=6}
// console.log(LRUCache03.get(1)); // return -1
// console.log(LRUCache03.put(1, 5)); // cache is {2=6, 1=5}
// console.log(LRUCache03.put(1, 2)); // cache is {1=2, 1=5}
// console.log(LRUCache03.get(1)); // 2
// console.log(LRUCache03.get(2)); // -1

// console.log('NEWWWWWWWWWWWWWWWWWWWWWWWWWWWWW4');

// const LRUCache04 = new LRUCache0(2);
// console.log(LRUCache04.get(2)); // return -1
// console.log(LRUCache04.put(2, 1)); // cache is {2=1}
// console.log(LRUCache04.put(1, 1)); // cache is {2=6}
// console.log(LRUCache04.put(2, 3)); // cache is {2=6}
// console.log(LRUCache04.put(4, 1)); // cache is {2=6}
// console.log(LRUCache04.get(1)); // -1
// console.log(LRUCache04.get(2)); // 3
// console.log(LRUCache04.get(4)); // 1

// console.log('NEWWWWWWWWWWWWWWWWWWWWWWWWWWWWW2');
// /**
//  * Your LRUCache0 object will be instantiated and called as such:
//  * var obj = new LRUCache0(capacity)
//  * var param_1 = obj.get(key)
//  * obj.put(key,value)
//  */

// const LRUCache02 = new LRUCache0(1);
// console.log(LRUCache02.put(2, 1)); // cache is {2=1}
// console.log(LRUCache02.get(2)); // return 1
// console.log(LRUCache02.put(3, 2)); // LRU key was 2, evicts key 2, cache is { 3=2}
// console.log(LRUCache02.get(2)); // -1
// console.log(LRUCache02.get(3)); // 2

// console.log('BIG TO TRACEEEEEEEEEEEEEEEE');
// const LRUCache06 = new LRUCache0(10);
// console.log(LRUCache06.put(10, 13)); // cache is {2=1}
// console.log(LRUCache06.put(3, 17)); // cache is {2=1}
// console.log(LRUCache06.put(6, 11)); // cache is {2=1}
// console.log(LRUCache06.put(10, 5)); // cache is {2=1}
// console.log(LRUCache06.put(9, 10)); // cache is {2=1}
// console.log(LRUCache06.get(13)); // cache is {2=1}
// console.log(LRUCache06.put(2, 19)); // cache is {2=1}
// console.log(LRUCache06.get(2)); // cache is {2=1}
// console.log(LRUCache06.get(3)); // cache is {2=1}
// console.log(LRUCache06.put(5, 25)); // cache is {2=1}
// console.log(LRUCache06.get(8)); // cache is {2=1}
// console.log(LRUCache06.put(9, 22)); // cache is {2=1}
// console.log(LRUCache06.put(5, 5)); // cache is {2=1}
// console.log(LRUCache06.put(1, 30)); // cache is {2=1}
// console.log(LRUCache06.get(11)); // cache is {2=1}
// console.log(LRUCache06.put(9, 12)); // cache is {2=1}
// console.log(LRUCache06.get(7)); // cache is {2=1}
// console.log(LRUCache06.get(5)); // cache is {2=1}
// console.log(LRUCache06.get(8)); // cache is {2=1}
// console.log(LRUCache06.get(9)); // cache is {2=1}
// console.log(LRUCache06.put(4, 30)); // cache is {2=1}
// console.log(LRUCache06.put(9, 3)); // cache is {2=1}
// console.log(LRUCache06.get(9)); // cache is {2=1}
// console.log(LRUCache06.get(10)); // cache is {2=1}
// console.log(LRUCache06.get(10)); // cache is {2=1}
// console.log(LRUCache06.put(6, 14)); // cache is {2=1}
// console.log(LRUCache06.put(3, 1)); // cache is {2=1}
// console.log(LRUCache06.get(3)); // cache is {2=1}
// console.log(LRUCache06.put(10, 11)); // cache is {2=1}
// console.log(LRUCache06.get(8)); // cache is {2=1}
// console.log(LRUCache06.put(2, 11)); // cache is {2=1}
// console.log(LRUCache06.get(1)); // cache is {2=1}
// console.log(LRUCache06.get(5)); // cache is {2=1}
// console.log(LRUCache06.get(4)); // cache is {2=1}
// console.log(LRUCache06.put(11, 4)); // cache is {2=1}
// console.log(LRUCache06.put(12, 24)); // cache is {2=1}
// console.log(LRUCache06.put(5, 18)); // cache is {2=1}
// console.log(LRUCache06.get(13)); // cache is {2=1}
// console.log(LRUCache06.put(7, 23)); // cache is {2=1}
// console.log(LRUCache06.get(8)); // cache is {2=1}
// console.log(LRUCache06.get(12)); // cache is {2=1}
// console.log(LRUCache06.put(3, 27)); // cache is {2=1}
// console.log(LRUCache06.put(2, 12)); // cache is {2=1}
// console.log(LRUCache06.get(5)); // cache is {2=1}
// console.log(LRUCache06.put(2, 9)); // cache is {2=1}
// console.log(LRUCache06.put(13, 4)); // cache is {2=1}
// console.log(LRUCache06.put(8, 18)); // cache is {2=1}
// console.log(LRUCache06.put(1, 7)); // cache is {2=1}
// console.log(LRUCache06.get(6)); // cache is {2=1}
// console.log(LRUCache06.put(9, 29)); // cache is {2=1}
// console.log(LRUCache06.put(8, 21)); // cache is {2=1}
// console.log(LRUCache06.get(5)); // cache is {2=1}
// console.log(LRUCache06.put(6, 30)); // cache is {2=1}
// console.log(LRUCache06.put(1, 12)); // cache is {2=1}
// console.log(LRUCache06.get(10)); // cache is {2=1}
// console.log(LRUCache06.put(4, 15)); // cache is {2=1}
// console.log(LRUCache06.put(7, 22)); // cache is {2=1}
// console.log(LRUCache06.put(11, 26)); // cache is {2=1}
// console.log(LRUCache06.put(8, 17)); // cache is {2=1}
// console.log(LRUCache06.put(9, 29)); // cache is {2=1}
// console.log(LRUCache06.get(5)); // cache is {2=1}
// console.log(LRUCache06.put(3, 4)); // cache is {2=1}
// console.log(LRUCache06.put(11, 30)); // cache is {2=1}
// console.log(LRUCache06.get(12)); // cache is {2=1}
// console.log(LRUCache06.put(4, 29)); // cache is {2=1}
// console.log(LRUCache06.get(3)); // cache is {2=1}
// console.log(LRUCache06.get(9)); // cache is {2=1}
// console.log(LRUCache06.get(6)); // cache is {2=1}
// console.log(LRUCache06.put(3, 4)); // cache is {2=1}
// console.log(LRUCache06.get(1)); // cache is {2=1}
// console.log(LRUCache06.get(10)); // cache is {2=1}
// console.log(LRUCache06.put(3, 29)); // cache is {2=1}
// console.log(LRUCache06.put(10, 28)); // cache is {2=1}
// console.log(LRUCache06.put(1, 20)); // cache is {2=1}
// console.log(LRUCache06.put(11, 13)); // cache is {2=1}
// console.log(LRUCache06.get(3)); // cache is {2=1}

// ["LRUCache0","put","put","put","put","put","get","put","get","get","put","get","put","put","put","get","put","get","get","get","get","put","put","get","get","get","put","put","get","put","get","put","get","get","get","put","put","put","get","put","get","get","put","put","get","put","put","put","put","get","put","put","get","put","put","get","put","put","put","put","put","get","put","put","get","put","get","get","get","put","get","get","put","put","put","put","get","put","put","put","put","get","get","get","put","put","put","get","put","put","put","get","put","put","put","get","get","get","put","put","put","put","get","put","put","put","put","put","put","put"]
// [[3,12],[3,8],[10,9],[3,26],[8],[7],[5],[13,17],[2,27],[11,15],[12],[9,19],[2,15],[3,16],[1],[12,17],[9,1],[6,19],[4],[5],[5],[8,1],[11,7],[5,2],[9,28],[1],[2,2],[7,4],[4,22],[7,24],[9,26],[13,28],[11,26]]

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = new Node(-1, -1);
    this.tail = new Node(-1, -1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  addToHead(node) {
    const headOriginalNextNode = this.head.next;

    // Link head and new node.
    this.head.next = node;
    node.prev = this.head;

    // Link new node and head's original next node.
    node.next = headOriginalNextNode;
    headOriginalNextNode.prev = node;
  }

  removeFromTail() {
    const lastNode = this.tail.prev;
    this.tail.prev = lastNode.prev;
    lastNode.prev.next = this.tail;
    return lastNode;
  }

  removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  moveToHead(node) {
    this.removeNode(node);
    this.addToHead(node);
  }
}

/**
 * @param {number} capacity
 */
class LRUCache {
  constructor(capacity) {
    this.doubleLinkedList = new DoubleLinkedList();
    this.maxCapacity = capacity;
    this.nodesCounter = 0;
    this.nodeMap = {};
  }
  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    const node = this.nodeMap[key];
    if (node === undefined) {
      return -1;
    }

    this.doubleLinkedList.moveToHead(node);
    return node.value;
  }
  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    let node = this.nodeMap[key];

    if (node === undefined) {
      this.addNode(key, value);
      if (this.nodesCounter > this.maxCapacity) {
        this.updateOverflow();
      }
    } else {
      node.value = value;
      this.nodeMap[key] = node;
      this.doubleLinkedList.moveToHead(node);
    }

    return this.nodeMap;
  }

  addNode(key, value) {
    const node = new Node(key, value);
    this.doubleLinkedList.addToHead(node);
    this.nodeMap[key] = node;
    this.nodesCounter++;
  }

  updateOverflow() {
    const node = this.doubleLinkedList.removeFromTail();
    delete this.nodeMap[node.key];
    this.nodesCounter--;
  }
}

console.log('NEWWWWWWWWWWWWWWWWWWWWWWWWWWWWW101');

const lruCache = new LRUCache(3);
console.log(lruCache.put(1, 1)); //
console.log(lruCache.put(2, 2)); //
console.log(lruCache.put(3, 3)); //
console.log(lruCache.put(4, 4)); //
console.log(lruCache.get(4)); // 4
console.log(lruCache.get(3)); // 3
console.log(lruCache.get(2)); // 2
console.log(lruCache.get(1)); // -1
console.log(lruCache.put(5, 5)); //
console.log(lruCache.get(1)); // -1
console.log(lruCache.get(2)); // 2
console.log(lruCache.get(3)); // 3
console.log(lruCache.get(4)); // -1
console.log(lruCache.get(5)); // 5
