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
