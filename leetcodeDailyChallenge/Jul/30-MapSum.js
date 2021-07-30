class MapSum {
  constructor() {
    this.map = new Map();
  }
  insert(key, val) {
    this.map.set(key, val);
  }
  sum(prefix) {
    let result = 0;
    for (let [key, value] of this.map) if (key.startsWith(prefix)) result += value;
    return result;
  }
}
