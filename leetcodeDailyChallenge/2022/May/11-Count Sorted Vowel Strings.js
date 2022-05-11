/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
  let count = Array(5).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < count.length; j++) {
      count[j] = count.slice(j).reduce((sum, vow) => sum + vow, 0);
    }
  }

  return count.reduce((sum, vow) => sum + vow, 0);
};

console.log(countVowelStrings(1));
console.log(countVowelStrings(2));
console.log(countVowelStrings(33));
