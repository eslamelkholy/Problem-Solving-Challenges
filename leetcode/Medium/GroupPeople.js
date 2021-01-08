/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 * Test Cases:
 * Input: groupSizes = [3,3,3,3,3,1,3]
 * Output: [[5],[0,1,2],[3,4,6]]
 * Input: groupSizes = [2,1,3,3,3,2]
 * Output: [[1],[0,5],[2,3,4]]
 */
var groupThePeople = function (groupSizes) {
  const result = [];
  const groupsIndexMap = {};
  for (let i = 0; i < groupSizes.length; i++) {
    const element = groupSizes[i]; // 3
    groupsIndexMap[element] = groupsIndexMap[element] ? [...groupsIndexMap[element], i] : [i];
  }

  for (const key in groupsIndexMap) {
    const element = groupsIndexMap[key];
    if (parseInt(key) < element.length) {
      let firstIndex = 0;
      let lastIndex = parseInt(key);
      while (element.length > 0) result.push(element.splice(firstIndex, lastIndex));
    } else result.push(groupsIndexMap[key]);
  }
  return result;
};

console.log(groupThePeople([3, 3, 3, 3, 3, 1, 3]));
