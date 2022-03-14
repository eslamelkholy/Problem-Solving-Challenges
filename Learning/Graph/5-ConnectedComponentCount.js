const connectedComponentCount = (graph) => {
  const visited = new Set();
  let counter = 0;

  for (const node in graph) {
    if (dfs(graph, Number(node), visited)) {
      counter++;
    }
  }

  return counter;
};

const dfs = (graph, currentNode, visited) => {
  if (visited.has(currentNode)) return false;

  visited.add(currentNode);

  for (const neighbor of graph[currentNode]) {
    dfs(graph, neighbor, visited);
  }

  return true; // The Whole Explore Done
};

const graph = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
};

console.log(connectedComponentCount(graph));
