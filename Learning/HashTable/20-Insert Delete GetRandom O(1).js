/**
 * Initialize your data structure here.
 */
class RandomizedSet {
  constructor() {
    this.set = new Set();
    this.data = [];
  }
  insert(val) {
    if (this.set.has(val)) return false;
    this.set.add(val);
    this.data.push(val);
    return true;
  }
  remove(val) {
    if (!this.set.has(val)) return false;
    this.set.delete(val);
    this.data.splice(this.data.indexOf(val), 1);
    return true;
  }
  getRandom() {
    return this.data[Math.floor(Math.random() * this.data.length)];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
