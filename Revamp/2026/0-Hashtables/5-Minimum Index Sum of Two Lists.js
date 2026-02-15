/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  const map1 = {};
  const map2 = {};
  const result = [];
  let minIndex = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < list1.length; i++) {
    map1[list1[i]] = i;
  }
  for (let i = 0; i < list2.length; i++) {
    map2[list2[i]] = i;
  }

  for (const key in map1) {
    if (map2[key] === undefined) continue;
    minIndex = Math.min(map1[key] + map2[key], minIndex);
  }

  for (const key in map1) {
    if (map2[key] === undefined || map1[key] + map2[key] != minIndex) continue;

    result.push(key);
  }

  return result;
};
