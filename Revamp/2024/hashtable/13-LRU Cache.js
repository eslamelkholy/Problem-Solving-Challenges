class LRUCache {
  constructor(capacity) {
    this.map = new Map();
    this.capacity = capacity;
  }

  get(key) {
    if (!this.map.has(key)) return -1;

    const val = this.map.get(key);

    this.map.delete(key);
    this.map.set(key, val);
    return val;
  }

  put(key, value) {
    this.map.delete(key);

    if (this.map.size === this.capacity) {
      this.map.delete(this.map.keys().next().value);
    }

    this.map.set(key, value);
  }
}
