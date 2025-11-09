/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  const map1 = new Map();
  const map2 = new Map();
  const result = [];
  let leastStr = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < list1.length; i++) {
    map1.set(list1[i], i);
  }

  for (let i = 0; i < list2.length; i++) {
    map2.set(list2[i], i);
  }

  for (const [key, value] of map1) {
    if (map2.get(key) === undefined) continue;
    leastStr = Math.min(leastStr, map1.get(key) + map2.get(key));
  }
  for (const [key, value] of map1) {
    if (map2.get(key) === undefined) continue;

    const sum = value + map2.get(key);
    if (sum === leastStr) result.push(key);
  }

  return result;
};
