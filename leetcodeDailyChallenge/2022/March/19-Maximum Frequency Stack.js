class FreqStack {
  constructor() {
    this.freqMap = {};
    this.stack = [];
    this.mostFreq = 1;
  }
  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.freqMap[val] ? this.freqMap[val]++ : (this.freqMap[val] = 1);
    this.stack.push(val);
    this.mostFreq = Math.max(this.mostFreq, this.freqMap[val]);
  }
  /**
   * @return {number}
   */
  pop() {
    if (this.mostFreq === 1) {
      const val = this.stack.pop();
      delete this.freqMap[val];
      return val;
    }

    return this.getMostFreqValue();
  }

  getMostFreqValue() {
    for (let i = this.stack.length - 1; i >= 0; i--) {
      const val = this.stack[i];
      if (this.freqMap[val] === this.mostFreq) {
        this.stack.splice(i, 1);
        this.freqMap[val]--;

        if (this.freqMap[val] === 0) delete this.freqMap[val];
        this.mostFreq = Math.max(...Object.values(this.freqMap));

        return val;
      }
    }
  }
}

class FreqStack {
  constructor() {
    this.freqMap = {};
    this.freqMapGroupStack = {};
    this.mostFreq = 1;
  }
  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.freqMap[val] = this.freqMap[val] + 1 || 1;
    const frequency = this.freqMap[val];

    if (!this.freqMapGroupStack[frequency]) this.freqMapGroupStack[frequency] = [];
    this.freqMapGroupStack[frequency].push(val);

    this.mostFreq = Math.max(this.mostFreq, frequency);
  }
  /**
   * @return {number}
   */
  pop() {
    const val = this.freqMapGroupStack[this.mostFreq].pop();

    this.freqMap[val]--;
    if (this.freqMapGroupStack[this.mostFreq].length === 0) this.mostFreq--;

    return val;
  }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
