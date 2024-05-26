/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  for (let left = 0; left < height.length; left++) {
    for (let right = left + 1; right < height.length; right++) {
      const width = right - left;

      max = Math.max(max, Math.min(height[left], height[right]) * width);
    }
  }

  return max;
};

var maxArea = function (height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let width = right - left;

    max = Math.max(max, Math.min(height[left], height[right]) * width);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
};
