const undirectedPathUsingDFS = (edges, source, dest) => {
  const stack = [source];
  const visited = new Set();
  const graph = buildGraph(edges);

  while (stack.length > 0) {
    const currentNode = stack.pop();

    if (visited.has(currentNode)) continue;

    if (currentNode === dest) return true;

    visited.add(currentNode);

    for (const neighbor of graph[currentNode]) {
      stack.push(neighbor);
    }
  }
  return false;
};

const undirectedPathUsingDFSRecursive = (edges, source, dest) => {
  const graph = buildGraph(edges);
  const visited = new Set();

  return DFShasPath(graph, source, dest, visited);
};

const DFShasPath = (graph, src, dest, visited) => {
  if (src === dest) return true;
  if (visited.has(src)) return false;

  visited.add(src);

  for (const neighbor of graph[src]) {
    if (DFShasPath(graph, neighbor, dest, visited)) {
      return true;
    }
  }

  return false;
};

const buildGraph = (edges) => {
  const graph = {};
  for (const edge of edges) {
    const [a, b] = edge;
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};

const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n'],
];

// console.log(undirectedPathUsingDFS(edges, 'j', 'm'));
console.log(undirectedPathUsingDFSRecursive(edges, 'j', 'm'));
