const removeDuplicationUsingSet = (arr) => [...new Set(arr)];

const removeDuplication = (arr) => arr.filter((val, index) => arr.indexOf(val) === index);

console.log(removeDuplication([1, 4, 6, 2, 1, 67, 7, 5, 6, 2, 1]));

module.exports = {
  removeDuplication,
  removeDuplicationUsingSet,
};
