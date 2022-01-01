/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  let result = new Array(mat.length).fill(0).map(() => new Array(mat[0].length).fill(0));
  const graph = {};
  for (let i = 0; i < mat.length; i++) {
    const colLen = mat[i].length;
    for (let j = 0; j < colLen; j++) {
      const nearestNodes = [];
      const currentNode = j + 1 + (colLen * i + 1);
      if (j - 1 >= 0) nearestNodes.push(currentNode - 1); // left
      if (j + 1 < colLen) nearestNodes.push(currentNode + 1); // right
      if (i + 1 < mat.length) nearestNodes.push(currentNode + colLen); // top
      if (i - 1 >= 0) nearestNodes.push(currentNode - colLen); // down
      graph[currentNode] = { nearest: nearestNodes, value: mat[i][j], row: i, col: j };
    }
  }
  for (const key in graph) result[graph[key]['row']][graph[key]['col']] = BFS(key, graph);

  return result;
};
const BFS = (baseName, graph) => {
  if (graph[baseName]['value'] === 0) return 0;
  let search_queue = [...graph[baseName]['nearest']];
  const searched = [];
  while (search_queue.length > 0) {
    const nodeKey = search_queue.shift();
    if (searched.includes(nodeKey)) continue;
    if (graph[nodeKey]['value'] === 0)
      return (
        Math.abs(graph[nodeKey]['row'] - graph[baseName]['row']) +
        Math.abs(graph[nodeKey]['col'] - Math.abs(graph[baseName]['col']))
      ); // Return Distance Between baseName and nodeKe

    search_queue = [...search_queue, ...graph[nodeKey]['nearest']];
    searched.push(nodeKey);
  }
};

console.log(
  updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ])
);
