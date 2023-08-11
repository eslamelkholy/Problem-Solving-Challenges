/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  const commonString = [];
  let MIN_SUM = Number.MAX_SAFE_INTEGER;

  const map1 = {};
  const map2 = {};

  for (let i = 0; i < list1.length; i++) {
    map1[list1[i]] = i;
  }

  for (let i = 0; i < list2.length; i++) {
    map2[list2[i]] = i;
  }

  for (const key in map1) {
    if (map2[key] === undefined) continue;
    const sum = map1[key] + map2[key];

    if (sum < MIN_SUM) {
      MIN_SUM = sum;
    }
  }

  for (const key in map1) {
    if (map2[key] === undefined) continue;
    const sum = map1[key] + map2[key];
    if (sum === MIN_SUM) {
      commonString.push(key);
    }
  }

  return commonString;
};

console.log(findRestaurant((list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"]), (list2 = ["KFC", "Shogun", "Burger King"])));
console.log(findRestaurant((list1 = ["happy", "sad", "good"]), (list2 = ["sad", "happy", "good"])));
