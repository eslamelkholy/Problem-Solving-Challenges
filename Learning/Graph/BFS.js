/**
 *
 * 1- Solution Using Queue
 */
const bfs = (graph, sourceNode) => {
  const queue = [sourceNode];

  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);

    for (const neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
};

const graph = {
  // a: ['b', 'c'],
  a: ['c', 'b'],
  b: ['d'],
  c: ['e'],
  e: [],
  d: ['f'],
  f: [],
};

console.log(bfs(graph, 'a'));
