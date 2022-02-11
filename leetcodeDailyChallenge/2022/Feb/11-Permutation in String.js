/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// var checkInclusion = function (s1, s2) {
//   for (let i = 0; i < s2.length; i++) {
//     let currentStr = '';
//     for (let j = i; j < s2.length; j++) {
//       currentStr += s2[j];
//       const sortedStr1 = currentStr.split('').sort().join('');
//       const sortedStr2 = s1.split('').sort().join('');
//       if (sortedStr1 === sortedStr2) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

var checkInclusion = function (s1, s2) {
  let k = s1.length;
  let permuted = s1.split('').sort().join('');
  let flag = false;
  for (let i = 0; i < s2.length; i++) {
    if (!s2[i + k - 1]) break;
    if (isPermuted(s2.slice(i, i + k))) {
      flag = true;
      break;
    }
  }
  function isPermuted(sub) {
    return sub.split('').sort().join('') == permuted;
  }
  return flag;
};

console.log(checkInclusion('ab', 'eidbaooo'));
console.log(checkInclusion('ab', 'eidboaoo'));
