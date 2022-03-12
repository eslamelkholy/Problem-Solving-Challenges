const largestComponent = (graph) => {
  const visited = new Set();
  let longestSize = 0;

  for (const node in graph) {
    const size = exploreSizeDfs(graph, node, visited);
    if (size > longestSize) longestSize = size;
  }
  return longestSize;
};

const exploreSizeDfs = (graph, node, visited) => {
  if (visited.has(node)) return 0;

  visited.add(node);
  let size = 1;

  for (const neighbor of graph[node]) {
    size += exploreSizeDfs(graph, neighbor, visited);
  }

  return size;
};

const graph = {
  0: ['8', '1', '5'],
  1: ['0'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2'],
};
console.log(largestComponent(graph));
