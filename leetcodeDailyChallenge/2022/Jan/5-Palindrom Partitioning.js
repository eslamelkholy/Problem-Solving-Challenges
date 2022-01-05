/**
 * @param {string} s
 * @return {string[][]}
 */
const isPalindrom = (s) => {
  for (let i = 0; i < s.length; i++) if (s[i] !== s[s.length - 1 - i]) return false;

  return true;
};

const stringParition = (str) => {
  const allPartitions = [];
  for (var cutpoints = 0; cutpoints < 1 << (str.length - 1); cutpoints++) {
    const slicedPartition = [];
    let lastcut = 0;
    for (let i = 0; i < str.length - 1; i++) {
      if (((1 << i) & cutpoints) !== 0) {
        slicedPartition.push(str.slice(lastcut, i + 1));
        lastcut = i + 1;
      }
    }
    slicedPartition.push(str.slice(lastcut));
    allPartitions.push(slicedPartition);
  }
  return allPartitions;
};

var partition = function (s) {
  const stringPartitions = stringParition(s);
  const palindromPartitions = [];
  for (const partition of stringPartitions) {
    let isAllSubStringsPalindrom = true;
    for (const subString of partition) {
      if (!isPalindrom(subString)) {
        isAllSubStringsPalindrom = false;
        break;
      }
    }
    if (isAllSubStringsPalindrom) palindromPartitions.push(partition);
  }
  return palindromPartitions;
};

console.log(partition('aab'));
