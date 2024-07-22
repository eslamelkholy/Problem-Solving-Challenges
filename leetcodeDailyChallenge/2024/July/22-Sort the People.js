/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  let namesMap = {};

  for (let i = 0; i < heights.length; i++) {
    if (namesMap[names[i]]) {
      names[i] = names[i] + `-${i}`;
    }
    namesMap[names[i]] = heights[i];
  }

  names.sort((a, b) => namesMap[b] - namesMap[a]);
  names = names.map((val) => (val = val.includes("-") ? val.split("-")[0] : val));

  return names;
};
