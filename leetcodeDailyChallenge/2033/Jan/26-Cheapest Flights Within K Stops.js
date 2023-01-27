/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  const graph = buildGraph(flights);

  const queue = [[0, src, k + 1]];
  const visited = new Map();

  while (queue.length > 0) {
    queue.sort((a, b) => a[0] - b[0]); // Sort by Cost;
    const [cost, city, stops] = queue.shift();
    visited.set(city, stops);

    if (city === dst) return cost;

    if (stops <= 0 || graph[city] === undefined) continue;

    for (const [nextCity, nextCost] of graph[city]) {
      if (visited.has(nextCity) && visited.get(nextCity) >= stops - 1) continue;

      queue.push([cost + nextCost, nextCity, stops - 1]);
    }
  }

  return -1;
};

const buildGraph = (flights) => {
  const graph = {};
  for (const [start, end, cost] of flights) {
    if (graph[start] === undefined) graph[start] = [];

    graph[start].push([end, cost]);
  }
  return graph;
};

console.log(
  findCheapestPrice(
    (n = 4),
    (flights = [
      [0, 1, 100],
      [1, 2, 100],
      [2, 0, 100],
      [1, 3, 600],
      [2, 3, 200],
    ]),
    (src = 0),
    (dst = 3),
    (k = 1)
  )
);
