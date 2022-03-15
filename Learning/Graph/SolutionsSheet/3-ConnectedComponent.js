const connectedComponentsCount = (graph) => {
  const visited = new Set();
  let counter = 0;

  for (const node in graph) {
    if (dfs(graph, Number(node), visited)) {
      counter++;
    }
  }

  return counter;
};

const dfs = (graph, node, visited) => {
  if (visited.has(node)) return false;

  visited.add(node);

  for (const neighbor of graph[node]) {
    dfs(graph, neighbor, visited);
  }

  return true;
};

console.log(
  connectedComponentsCount({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2],
  })
); // -> 2
