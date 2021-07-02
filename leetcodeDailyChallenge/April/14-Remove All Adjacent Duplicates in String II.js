/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

console.log(removeDuplicates('pbbcggttciiippooaais', 2));
var removeDuplicates = function (s, k) {
  const stringFrequent = {};
  let result = '';
  for (const char of s)
    if (stringFrequent[char]) {
      stringFrequent[char]++;
      if (stringFrequent[char] === k) delete stringFrequent[char];
    } else stringFrequent[char] = 1;
  for (const key in stringFrequent) result = result.concat(...new Array(stringFrequent[key]).fill(key));
  return result;
};

console.log(removeDuplicates('yfttttfbbbbnnnnffbgffffgbbbbgssssgthyyyy', 4));
// console.log(removeDuplicates('pbbcggttciiippooaais', 2));
// console.log(removeDuplicates('deeedbbcccbdaa', 3));
// console.log(removeDuplicates('abcd', 2));
