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

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  let heightsMap = {};

  for (let i = 0; i < names.length; i++) {
    heightsMap[heights[i]] = names[i];
  }

  heights.sort((a, b) => b - a);

  for (let i = 0; i < names.length; i++) {
    names[i] = heightsMap[heights[i]];
  }

  return names;
};
