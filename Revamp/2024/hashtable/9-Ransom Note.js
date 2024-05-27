/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const ransomMap = {};
  const magazineMap = {};

  for (let char of magazine) {
    magazineMap[char]++ || (magazineMap[char] = 1);
  }

  for (const char of ransomNote) {
    ransomMap[char]++ || (ransomMap[char] = 1);
  }

  for (const key in ransomMap) {
    if (magazineMap[key] === undefined || magazineMap[key] < ransomMap[key]) return false;
  }

  return true;
};

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const magazineMap = {};

  for (let char of magazine) {
    magazineMap[char]++ || (magazineMap[char] = 1);
  }

  for (const char of ransomNote) {
    if (magazineMap[char] === undefined || --magazineMap[char] < 0) return false;
  }

  return true;
};
