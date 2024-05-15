/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  const commonString = [];
  const map1 = {};
  const map2 = {};
  let leastIndexSum = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < list1.length; i++) {
    map1[list1[i]] = i;
  }

  for (let i = 0; i < list2.length; i++) {
    map2[list2[i]] = i;
  }

  for (const key in map2) {
    if (map1[key] !== undefined) {
      leastIndexSum = Math.min(leastIndexSum, map1[key] + map2[key]);
    }
  }

  for (const key in map2) {
    if (map1[key] !== undefined && map1[key] + map2[key] === leastIndexSum) {
      commonString.push(key);
    }
  }

  return commonString;
};
