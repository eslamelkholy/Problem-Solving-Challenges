/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// const minWindow = (t, s) => {
//   let shortestString = null;
//   for (let i = 0; i < t.length; i++) {
//     for (let j = i; j < t.length; j++) {
//       const slicedStr = t.substr(i, j - i + 1);
//       if (isInclude(slicedStr, s) && (shortestString === null || slicedStr.length < shortestString.length)) {
//         shortestString = slicedStr;
//       }
//     }
//   }
//   return shortestString || '';
// };

// const isInclude = (slicedStr, subStr) => {
//   for (let i = 0; i < slicedStr.length; i++)
//     if (subStr.indexOf(slicedStr[i]) !== -1) subStr = subStr.replace(slicedStr[i], '');
//   return subStr.length === 0;
// };

var minWindow = function (s, t) {
  const tCharMap = new Map();
  for (let i = 0; i < t.length; i++)
    tCharMap.has(t[i]) ? tCharMap.set(t[i], tCharMap.get(t[i]) + 1) : tCharMap.set(t[i], 1);

  let leftPointer = 0;
  let rightPointer = 0;
  let counter = tCharMap.size;
  let minimumWindowSize = Number.MAX_SAFE_INTEGER;
  let result = '';
  while (rightPointer < s.length) {
    if (tCharMap.has(s[rightPointer])) {
      tCharMap.set(s[rightPointer], tCharMap.get(s[rightPointer]) - 1);
      if (tCharMap.get(s[rightPointer]) === 0) counter--;
    }
    while (counter === 0) {
      if (rightPointer - leftPointer + 1 <= minimumWindowSize) {
        minimumWindowSize = Math.min(rightPointer - leftPointer + 1, minimumWindowSize);
        result = s.substring(leftPointer, rightPointer + 1);
      }
      if (tCharMap.has(s[leftPointer])) {
        tCharMap.set(s[leftPointer], tCharMap.get(s[leftPointer]) + 1);
        if (tCharMap.get(s[leftPointer]) === 1) counter++;
      }
      leftPointer++;
    }
    rightPointer++;
  }

  return result;
};

// console.log(minWindow('ADOBECODEBANC', 'ABC'));
// console.log(minWindow('a', 'a'));
console.log(minWindow('a', 'aa'));
// console.log(minWindow('ab', 'a'));
// console.log(minWindow('bbaac', 'aba'));
