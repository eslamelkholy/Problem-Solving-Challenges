/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    };
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
class PeekingIterator {
  constructor(iterator) {
    this.itr = iterator;
    this.peeked = null;
  }

  peek() {
    if (!this.peeked) this.peeked = this.itr.next();
    return this.peeked;
  }

  next() {
    if (!this.peeked) return this.itr.next();
    const temp = this.peeked;
    this.peeked = null;
    return temp;
  }

  hasNext() {
    if (!this.peeked) return this.itr.hasNext();
    return true;
  }
}

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
