const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  const visited = new Set();
  const queue = [[nodeA, 0]];

  while (queue.length > 0) {
    const [node, distance] = queue.shift();

    if (visited.has(node)) continue;

    if (node === nodeB) return distance;

    for (const neighbor of graph[node]) {
      queue.push([neighbor, distance + 1]);
    }
  }

  return -1;
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

const edges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

const edges3 = [
  ["a", "c"],
  ["a", "b"],
  ["c", "b"],
  ["c", "d"],
  ["b", "d"],
  ["e", "d"],
  ["g", "f"],
];

console.log(shortestPath(edges, "z", "x"));

console.log(shortestPath(edges3, "a", "e")); // -> 3
