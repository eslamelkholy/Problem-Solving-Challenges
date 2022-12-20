/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const graph = buildGraph(rooms);
  const visited = new Set();
  const stack = [0];

  while (stack.length > 0) {
    const currentNode = stack.pop();
    if (visited.has(currentNode)) continue;

    visited.add(currentNode);

    for (const neighbour of graph[currentNode]) {
      stack.push(neighbour);
    }
  }

  return visited.size === rooms.length;
};

const buildGraph = (rooms) => {
  const graph = {};
  for (let i = 0; i < rooms.length; i++) {
    graph[i] = rooms[i];
  }
  return graph;
};
