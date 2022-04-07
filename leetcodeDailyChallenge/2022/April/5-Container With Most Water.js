var maxArea2 = function(height) {
  let maxArea = 0;
  let i = 0;
  let j = height.length - 1;
  while (i < j) {
    maxArea = Math.max(maxArea, Math.min(height[i], height[j]) * (j - i));
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return maxArea;
};

var maxArea = function(H) {
    let ans = 0, i = 0, j = H.length-1
    while (i < j) {
        ans = Math.max(ans, Math.min(H[i], H[j]) * (j - i))
        H[i] <= H[j] ? i++ : j--
    }
    return ans
};
