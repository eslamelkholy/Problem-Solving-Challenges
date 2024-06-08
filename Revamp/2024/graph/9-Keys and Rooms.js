/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const graph = buildGraph(rooms);
  const stack = [0];
  const visited = Array(rooms.length).fill(false);

  while (stack.length > 0) {
    const node = stack.pop();
    if (visited[node]) continue;

    visited[node] = true;

    for (const neighbor of graph[node]) {
      stack.push(neighbor);
    }
  }

  return !visited.includes(false);
};

const buildGraph = (rooms) => {
  const graph = {};
  for (let i = 0; i < rooms.length; i++) {
    graph[i] = rooms[i];
  }

  return graph;
};

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

    for (const neighbor of graph[currentNode]) {
      stack.push(neighbor);
    }
  }

  return visited.size === rooms.length;
};

const buildGraph2 = (rooms) => {
  const graph = {};
  for (let i = 0; i < rooms.length; i++) {
    graph[i] = rooms[i];
  }

  return graph;
};
