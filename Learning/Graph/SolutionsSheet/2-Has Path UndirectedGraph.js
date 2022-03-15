const undirectedPathDFSRecursive = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  const visited = new Set();

  return dfs(graph, visited, nodeA, nodeB);
};

const dfs = (graph, visited, node, target) => {
  if (node === target) return true;
  if (visited.has(node)) return false;

  visited.add(node);

  for (const neighbor of graph[node]) {
    if (dfs(graph, visited, neighbor, target)) {
      return true;
    }
  }

  return false;
};

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  const visited = new Set();
  const queue = [nodeA];

  while (queue.length > 0) {
    const currentNode = queue.shift();
    if (visited.has(currentNode)) continue;

    if (currentNode === nodeB) {
      return true;
    }
    visited.add(currentNode);

    for (const neighbor of graph[currentNode]) {
      queue.push(neighbor);
    }
  }

  return false;
};

const buildGraph = (edges) => {
  const graph = {};
  for (const [a, b] of edges) {
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

console.log(undirectedPath(edges, 'j', 'm')); // -> true
