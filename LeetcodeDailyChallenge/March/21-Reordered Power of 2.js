/**
 * @param {number} N
 * @return {boolean}
 */
var reorderedPowerOf2 = function (N) {
  let result = N.toString().split('').sort().join('');
  for (let i = 0; i < 30; i++) if ((1 << i).toString().split('').sort().join('') === result) return true;
  return false;
};

// console.log(reorderedPowerOf2(1));
// console.log(reorderedPowerOf2(10));
// console.log(reorderedPowerOf2(16));
// console.log(reorderedPowerOf2(24));
console.log(reorderedPowerOf2(46));
