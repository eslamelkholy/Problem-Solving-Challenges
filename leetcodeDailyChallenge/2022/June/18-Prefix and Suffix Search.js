var WordFilter = function (words) {
  this.map = new Map();
  for (let i = 0; i < words.length; i++) {
    let prefix = '';
    for (let j = 0; j <= words[i].length; j++) {
      let suffix = '';
      for (let k = 0; k <= words[i].length; k++) {
        suffix = words[i].slice(k);
        this.map.set(prefix + '#' + suffix, i);
      }
      prefix += words[i][j];
    }
  }
};

WordFilter.prototype.f = function (prefix, suffix) {
  let target = prefix + '#' + suffix;
  return this.map.has(target) ? this.map.get(target) : -1;
};

/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(prefix,suffix)
 */
