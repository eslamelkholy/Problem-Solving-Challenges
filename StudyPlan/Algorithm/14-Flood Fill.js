/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  const visited = new Set();
  const oldColor = image[sr][sc];
  return fillImage(image, sr, sc, oldColor, newColor, visited);
};

const fillImage = (image, x, y, oldColor, newColor, visited) => {
  const position = x + "-" + y;
  if (image[x] === undefined || image[x][y] === undefined || image[x][y] !== oldColor || visited.has(position))
    return image;

  visited.add(position);
  image[x][y] = newColor;

  fillImage(image, x + 1, y, oldColor, newColor, visited);
  fillImage(image, x - 1, y, oldColor, newColor, visited);
  fillImage(image, x, y + 1, oldColor, newColor, visited);
  fillImage(image, x, y - 1, oldColor, newColor, visited);

  return image;
};

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
);

console.log(
  floodFill(
    [
      [0, 0, 0],
      [0, 0, 0],
    ],
    0,
    0,
    2
  )
);

var floodFill = function (image, sr, sc, newColor) {
  const stack = [];
  const visited = new Set();
  stack.push({ x: sr, y: sc });
  const mainColor = image[sr][sc];

  while (stack.length > 0) {
    const { x, y } = stack.pop();
    const position = x + "," + y;

    if (
      image[x] === undefined ||
      image[x][y] === undefined ||
      image[x][y] !== mainColor ||
      visited.has(position)
    ) {
      continue;
    }

    if (image[x][y] === mainColor) {
      image[x][y] = newColor;
    }

    visited.add(position);

    stack.push({ x: x + 1, y: y });
    stack.push({ x: x, y: y + 1 });
    stack.push({ x: x - 1, y: y });
    stack.push({ x: x, y: y - 1 });
  }
  return image;
};
