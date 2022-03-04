/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  const graph = {};
  const convertedValue = image[sr][sc];
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      const point4D = [];
      // if (!image[i][j]) continue;

      if (image[i + 1] !== undefined && image[i + 1][j] !== undefined) point4D.push(i + 1 + '-' + j);
      if (image[i - 1] !== undefined && image[i - 1][j] !== undefined) point4D.push(i - 1 + '-' + j);
      if (image[i][j + 1] !== undefined) point4D.push(i + '-' + (j + 1));
      if (image[i][j - 1] !== undefined) point4D.push(i + '-' + (j - 1));

      graph[i + '-' + j] = point4D;
    }
  }

  const bfs = (i, j) => {
    let searchQueue = [...graph[i + '-' + j]];
    const searched = []; // Keep Track of Searched Points;
    while (searchQueue.length > 0) {
      const point = searchQueue.shift();
      if (searched.includes(point)) continue;

      const [start, end] = point.split('-');
      if (image[start][end] === convertedValue) image[start][end] = newColor;

      if (graph[point]) searchQueue = [...searchQueue, ...graph[point]];
      searched.push(point);
    }
  };
  console.log(graph);

  bfs(sr, sc);

  return image;
};

var floodFill = function (image, sr, sc, newColor) {
  fill(image, sr, sc, image[sr][sc], newColor);
  return image;
};

var fill = (image, x, y, oldColor, newColor) => {
  if (
    x < 0 ||
    y < 0 ||
    x >= image.length ||
    y >= image[x].length ||
    image[x][y] === newColor ||
    image[x][y] !== oldColor
  ) {
    return;
  }
  image[x][y] = newColor;
  fill(image, x + 1, y, oldColor, newColor);
  fill(image, x, y + 1, oldColor, newColor);
  fill(image, x - 1, y, oldColor, newColor);
  fill(image, x, y - 1, oldColor, newColor);
};

// console.log(
//   floodFill(
//     [
//       [1, 1, 1],
//       [1, 1, 0],
//       [1, 0, 1],
//     ],
//     1,
//     1,
//     2
//   )
// );

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
