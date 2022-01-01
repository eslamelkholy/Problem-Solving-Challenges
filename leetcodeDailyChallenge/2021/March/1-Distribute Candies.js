/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = (candyType) => Math.min(candyType.length / 2, new Set(candyType).size);

console.log(distributeCandies([1, 1, 2, 2, 3, 3]));
console.log(distributeCandies([1, 1, 2, 3]));
console.log(distributeCandies([6, 6, 6, 6]));
