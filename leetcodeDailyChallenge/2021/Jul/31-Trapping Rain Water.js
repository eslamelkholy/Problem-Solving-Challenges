/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let totalTrap = 0;

  for (let i = 1; i < height.length - 1; i++) {
    let left = height[i];
    let right = height[i];
    for (let j = 0; j < i; j++) left = Math.max(left, height[j]);

    for (let j = i + 1; j < height.length; j++) right = Math.max(right, height[j]);

    totalTrap += Math.min(left, right) - height[i];
  }

  return totalTrap;
};

var trap = function (height) {
  let l = 0;
  let r = height.length - 1;

  let levl = 0;
  let sum = 0;
  while (l < r) {
    let lower = 0;
    if (height[l] < height[r]) {
      lower = height[l];
      l++;
    } else {
      lower = height[r];
      r--;
    }
    levl = Math.max(lower, levl);
    sum += levl - lower;
  }

  return sum;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([4, 2, 0, 3, 2, 5]));
