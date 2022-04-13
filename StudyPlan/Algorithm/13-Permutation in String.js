/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) {
    return false;
  }
  const patternMap = new Map(); // O(26)
  const stringMap = new Map(); // O(26)
  for (let charIdx = 0; charIdx < s1.length; ++charIdx) {
    // O(m)
    patternMap.set(
      s1[charIdx],
      patternMap.has(s1[charIdx]) ? patternMap.get(s1[charIdx]) + 1 : 1
    );
    stringMap.set(
      s2[charIdx],
      stringMap.has(s2[charIdx]) ? stringMap.get(s2[charIdx]) + 1 : 1
    );
  }
  let left = 0,
    right = s1.length - 1;

  // O((n - m) * 26) ~ O(n)
  while (right < s2.length) {
    if (areMapsEqual(patternMap, stringMap)) {
      // O(26)
      return true;
    }
    const key1CountInStr = stringMap.get(s2[left]);
    if (key1CountInStr > 1) {
      stringMap.set(s2[left], key1CountInStr - 1);
    } else {
      stringMap.delete(s2[left]);
    }
    ++left;
    ++right;
    stringMap.set(
      s2[right],
      stringMap.has(s2[right]) ? stringMap.get(s2[right]) + 1 : 1
    );
  }
  return false;
};
// O(26) (max characters)
function areMapsEqual(map1, map2) {
  if (map1.size !== map2.size) {
    return false;
  }
  for (let key of map1.keys()) {
    if (!map2.has(key) || map1.get(key) !== map2.get(key)) {
      return false;
    }
  }
  return true;
}
console.log(checkInclusion("ab", "eidbaooo"));
console.log(checkInclusion("ab", "eidboaoo"));
console.log(checkInclusion("adc", "dcda"));
