/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const graphMap = buildGraph(graph);
  const TARGET = graph.length - 1;
  const result = [];
  const stack = [{ val: 0, path: [0] }];

  while (stack.length > 0) {
    const { val, path } = stack.pop();

    if (val === TARGET) result.push(path);

    for (const neighbour of graphMap[val]) {
      stack.push({ val: neighbour, path: [...path, neighbour] });
    }
  }
  return result;
};

const buildGraph = (edges) => {
  const graph = {};
  for (let i = 0; i < edges.length; i++) {
    graph[i] = edges[i];
  }
  return graph;
};
