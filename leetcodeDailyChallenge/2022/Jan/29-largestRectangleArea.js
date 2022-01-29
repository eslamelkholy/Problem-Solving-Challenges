var largestRectangleArea = function (heights) {
  let maxArea = 0;
  let stack = [];
  // adding the shadow rectangles
  heights.push(0);
  heights.unshift(0);

  for (let g = 0; g < heights.length; g++) {
    while (stack && stack.length && heights[stack[stack.length - 1]] > heights[g]) {
      let popElement = stack.pop();
      maxArea = Math.max(maxArea, heights[popElement] * (g - stack[stack.length - 1] - 1));
    }
    stack.push(g);
  }
  return maxArea;
};
