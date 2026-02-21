/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPairs = function (n, edges) {
  const componentSizes = [];
  const visited = new Set();
  const graph = buildGraph(n, edges);

  for (let i = 0; i < n; i++) {
    if (visited.has(i)) continue;
    visited.add(i);

    const queue = [i];
    let currentSize = 0;

    while (queue.length > 0) {
      const currentNode = queue.shift();
      currentSize++;

      for (const neighbor of graph[currentNode]) {
        if (visited.has(neighbor)) continue;

        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
    componentSizes.push(currentSize);
  }

  let result = 0;
  let remaining = n;
  for (const size of componentSizes) {
    remaining -= size;
    result += size * remaining;
  }

  return result;
};

const buildGraph = (n, edges) => {
  const graph = {};
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  for (const [x, y] of edges) {
    graph[x].push(y);
    graph[y].push(x);
  }

  return graph;
};
