/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
// var hasAllCodes = function (s, k) {
//   const binaries = [];
//   const numbersOfBinaries = parseInt('1'.repeat(k), 2);

//   for (let i = 0; i <= numbersOfBinaries; i++) binaries.push(i.toString(2).padStart(k, '0'));

//   for (let j = 0; j < binaries.length; j++) if (!s.includes(binaries[j])) return false;
//   return true;
// };

var hasAllCodes = function (s, k) {
  const binaries = [];
  const numbersOfBinaries = parseInt('1'.repeat(k), 2);

  for (let i = 0; i <= numbersOfBinaries; i++) binaries.push(i.toString(2).padStart(k, '0'));

  for (let j = 0; j < binaries.length; j++) if (!s.includes(binaries[j])) return false;
  return true;
};

console.log(hasAllCodes('0110', 2));
