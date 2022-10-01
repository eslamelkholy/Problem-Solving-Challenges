/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  const list1Map = new Map();
  const commonMap = new Map();
  let leastIndex = Number.MAX_SAFE_INTEGER;
  let result;
  for (let i = 0; i < list1.length; i++) list1Map.set(list1[i], i);

  for (let i = 0; i < list2.length; i++)
    if (list1Map.has(list2[i])) commonMap.set(list2[i], list1Map.get(list2[i]) + i);

  for (const [val, sumIndex] of commonMap)
    if (sumIndex < leastIndex) {
      result = val;
      leastIndex = sumIndex;
    }

  const commonMapValues = [...commonMap.values()];
  if (commonMapValues.length > 1 && commonMapValues.every((val, i, arr) => val === arr[0]))
    return [...commonMap.keys()];

  return [result];
};

console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["KFC", "Shogun", "Burger King"]));
console.log(
  findRestaurant(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
  )
);
console.log(
  findRestaurant(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    ["KFC", "Burger King", "Tapioca Express", "Shogun"]
  )
);

console.log(
  findRestaurant(
    ["Shogun", "Piatti", "Tapioca Express", "Burger King", "KFC"],
    ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
  )
);

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  const listMap1 = {};
  const listMap2 = {};
  let leastIndexSum = Number.MAX_SAFE_INTEGER;
  const result = [];

  for (let i = 0; i < list1.length; i++) {
    listMap1[list1[i]] = i;
  }
  for (let i = 0; i < list2.length; i++) {
    const word = list2[i];

    if (listMap1[word] !== undefined && i + listMap1[word] < leastIndexSum) {
      leastIndexSum = i + listMap1[word];
    }
    listMap2[word] = i;
  }

  for (const key in listMap1) {
    if (listMap2[key] === undefined) continue;

    if (listMap2[key] + listMap1[key] === leastIndexSum) {
      result.push(key);
    }
  }

  return result;
};
