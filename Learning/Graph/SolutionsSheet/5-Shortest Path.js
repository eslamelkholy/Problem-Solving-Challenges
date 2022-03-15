const shortestPath = (edges, nodeA, nodeB) => {
  const visited = new Set();
  const queue = [[nodeA, 0]];
  const graph = buildGraph(edges);

  while (queue.length > 0) {
    const [currentNode, distance] = queue.shift();
    if (visited.has(currentNode)) continue;

    visited.add(currentNode);
    if (currentNode === nodeB) {
      return distance;
    }

    for (const neighbor of graph[currentNode]) {
      queue.push([neighbor, distance + 1]);
    }
  }

  return -1;
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
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v'],
];

console.log(shortestPath(edges, 'w', 'z')); // -> 2
