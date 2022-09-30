/**
 * Let Use Hash Function y = x % 5;
 */
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
    const bucketArray = this[bucket];
    if (!bucketArray) return false;

    this[bucket] = bucketArray.filter((val) => val !== key);
  }

  /**
   * @param {number} key
   * @return {boolean}
   */
  contains(key) {
    const bucket = this.hashFunction(key);
    const bucketArray = this[bucket];
    if (!bucketArray) return false;

    const found = bucketArray.find((val) => val === key);
    return found !== undefined;
  }

  /**
   * @param {number} key
   * @return {number}
   */
  hashFunction(key) {
    const bucket = key % 5;
    return bucket;
  }
}
