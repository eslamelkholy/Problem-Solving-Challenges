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
