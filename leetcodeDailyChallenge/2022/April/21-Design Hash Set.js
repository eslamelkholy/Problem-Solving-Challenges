/**
 * Initialize your data structure here.
 */
class MyHashSet {
  constructor() {
    this.set = new Set();
  }
  /**
   * @param {number} key
   * @return {void}
   */
  add(key) {
    this.set.add(key);
  }
  /**
   * @param {number} key
   * @return {void}
   */
  remove(key) {
    this.set.delete(key);
  }
  /**
   * Returns true if this set contains the specified element
   * @param {number} key
   * @return {boolean}
   */
  contains(key) {
    return this.set.has(key);
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
var MyHashSet = function () {
  this.size = 9137;
  this.set = new Array(this.size);
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  let mod = key % this.size;
  if (!this.set[mod]) {
    this.set[mod] = [key];
  } else {
    if (!this.set[mod].includes(key)) {
      this.set[mod].push(key);
    }
  }
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  let mod = key % this.size;
  if (this.set[mod] && this.set[mod].includes(key)) {
    let idx = this.set[mod].findIndex((ele) => ele === key);
    if (idx > -1) this.set[mod].splice(idx, 1);
  }
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  let mod = key % this.size;
  if (this.set[mod] && this.set[mod].includes(key)) {
    return true;
  }
  return false;
};
