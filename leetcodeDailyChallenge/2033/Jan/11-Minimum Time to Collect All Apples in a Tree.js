/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function (n, edges, hasApple) {
  const graph = buildGraph(edges);
  const stack = [{ node: 0, edge: [] }];
  const edgeSet = new Set();
  const visited = new Set();
  let timer = 0;

  while (stack.length > 0) {
    const { node, edge } = stack.pop();
    if (visited.has(node)) continue;
    visited.add(node);

    if (hasApple[node]) {
      timer += countTime(edge, edgeSet);
    }

    for (const neighbor of graph[node]) {
      stack.push({ node: neighbor, edge: [...edge, node + "," + neighbor] });
    }
  }

  return timer;
};

const countTime = (edge, edgeSet) => {
  let countDistinct = 0;
  for (const ed of edge) {
    if (edgeSet.has(ed)) continue;

    edgeSet.add(ed);
    countDistinct += 2;
  }
  return countDistinct;
};

const buildGraph = (edges) => {
  const graph = {};
  for (const [x, y] of edges) {
    if (graph[x] === undefined) graph[x] = [];
    if (graph[y] === undefined) graph[y] = [];
    graph[x].push(y);
    graph[y].push(x);
  }

  return graph;
};

console.log(
  minTime(
    (n = 7),
    (edges = [
      [0, 1],
      [0, 2],
      [1, 4],
      [1, 5],
      [2, 3],
      [2, 6],
    ]),
    (hasApple = [false, false, true, false, true, true, false])
  )
);

console.log(
  minTime(
    (n = 7),
    (edges = [
      [0, 1],
      [0, 2],
      [1, 4],
      [1, 5],
      [2, 3],
      [2, 6],
    ]),
    (hasApple = [false, false, true, false, false, true, false])
  )
);

console.log(
  minTime(
    (n = 7),
    (edges = [
      [0, 1],
      [0, 2],
      [1, 4],
      [1, 5],
      [2, 3],
      [2, 6],
    ]),
    (hasApple = [false, false, false, false, false, false, false])
  )
);
console.log(
  minTime(
    (n = 4),
    (edges = [
      [0, 2],
      [0, 3],
      [1, 2],
    ]),
    [false, true, false, false]
  )
);
