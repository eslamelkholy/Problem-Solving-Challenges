class MyHashSet {
  constructor() {}
  /**
   * @param {number} key
   * @return {void}
   */
  add(key) {
    const bucket = this.hashFunction(key);

    if (this[bucket]) {
      this[bucket] = [...this[bucket], key];
    } else {
      this[bucket] = [key];
    }
  }
  /**
   * @param {number} key
   * @return {void}
   */
  remove(key) {
    const bucket = this.hashFunction(key);
    if (!this[bucket]) return;

    const newBucket = this[bucket].filter((val) => val !== key);
    this[bucket] = newBucket;
  }
  /**
   * @param {number} key
   * @return {boolean}
   */
  contains(key) {
    const bucket = this.hashFunction(key);
    if (this[bucket] && this[bucket].includes(key)) {
      return true;
    }

    return false;
  }

  hashFunction(key) {
    const bucket = key % 5;

    return bucket;
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
