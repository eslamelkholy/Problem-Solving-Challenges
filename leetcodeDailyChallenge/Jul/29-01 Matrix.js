/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  let result = new Array(mat.length).fill(0).map(() => new Array(mat[0].length).fill(0));
  const graph = {};
  const graphValues = {};
  let count = 0;
  for (let i = 0; i < mat.length; i++) {
    const colLen = mat[i].length;
    for (let j = 0; j < colLen; j++) {
      const nearestNodes = [];
      const currentNode = j + 1 + count;
      if (j - 1 >= 0) nearestNodes.push(currentNode - 1); // left
      if (j + 1 < colLen) nearestNodes.push(currentNode + 1); // right
      if (i + 1 < mat.length) nearestNodes.push(currentNode + colLen); // top
      if (i - 1 >= 0) nearestNodes.push(currentNode - colLen); // down
      graph[currentNode] = nearestNodes;
      graphValues[currentNode] = { value: mat[i][j], row: i, col: j };
    }
    count += colLen;
  }
  for (const key in graph) {
    if (graphValues[key]['value'] === 0) continue;
    result[graphValues[key]['row']][graphValues[key]['col']] = BFS(key, graph, graphValues);
  }
  return result;
};

const BFS = (baseName, graph, graphValues) => {
  let search_queue = [...graph[baseName]];
  const searched = [];
  while (search_queue.length > 0) {
    const nodeKey = search_queue.shift();
    if (searched.includes(nodeKey)) continue;

    if (graphValues[nodeKey]['value'] === 0)
      return (
        Math.abs(graphValues[nodeKey]['row'] - graphValues[baseName]['row']) +
        Math.abs(graphValues[nodeKey]['col'] - Math.abs(graphValues[baseName]['col']))
      ); // Return Distance Between baseName and nodeKe

    search_queue = [...search_queue, ...graph[nodeKey]];
    searched.push(nodeKey);
  }
  return -1;
};

console.log(
  updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ])
);
