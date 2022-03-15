const largestComponent = (graph) => {
  const visited = new Set();
  let largestSize = 0;

  for (const node in graph) {
    const size = exploreGrahs(graph, node, visited);
    if (!size) continue;

    largestSize = Math.max(largestSize, size);
  }
  return largestSize;
};

const exploreGrahs = (graph, node, visited) => {
  if (visited.has(node)) return false;
  visited.add(node);

  let size = 1;
  for (const neighbor of graph[node]) {
    size += exploreGrahs(graph, neighbor, visited);
  }

  return size;
};

console.log(
  largestComponent({
    0: ['8', '1', '5'],
    1: ['0'],
    5: ['0', '8'],
    8: ['0', '5'],
    2: ['3', '4'],
    3: ['2', '4'],
    4: ['3', '2'],
  })
); // 4
