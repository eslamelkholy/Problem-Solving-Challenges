const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  const visited = new Set([nodeA]);
  let queue = [[nodeA, 0]];

  while (queue.length > 0) {
    const [node, distance] = queue.shift();

    if (node === nodeB) return distance;

    for (const neighbor of graph[node]) {
      if (visited.has(neighbor)) continue;

      visited.add(neighbor);
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

const edges2 = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v'],
];

const edges3 = [
  ['a', 'c'],
  ['a', 'b'],
  ['c', 'b'],
  ['c', 'd'],
  ['b', 'd'],
  ['e', 'd'],
  ['g', 'f'],
];

console.log(shortestPath(edges, 'w', 'z'));
// console.log(shortestPath(edges2, 'y', 'x'));

// console.log(shortestPath(edges3, 'a', 'e')); // -> 3
