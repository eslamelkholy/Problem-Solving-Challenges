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

var canVisitAllRooms = function (rooms) {
  const visited = new Set([0]);
  const stack = [0];

  while (stack.length > 0) {
    const currentNode = stack.pop();

    for (const room of rooms[currentNode]) {
      if (visited.has(room)) continue;
      visited.add(room);
      stack.push(room);
    }
  }
  return visited.size === rooms.length;
};
