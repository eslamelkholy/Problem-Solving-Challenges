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
  const queue = [[0, src, k + 1]]; // [cost, source, stops]
  const visited = {};

  while (queue.length > 0) {
    queue.sort((a, b) => a[0] - b[0]); // Sort By Priority
    const [cost, source, stops] = queue.shift();
    visited[source] = stops;

    if (source === dst) return cost;
    if (stops <= 0 || graph[source] === undefined) continue;

    for (const [nextCity, nextCost] of graph[source]) {
      if (visited[nextCity] !== undefined && visited[nextCity] >= stops - 1) continue; // Has Next city and validate Stops

      queue.push([cost + nextCost, nextCity, stops - 1]);
    }
  }

  return -1;
};

const buildGraph = (flights) => {
  const graph = {};
  for (const [from, to, cost] of flights) {
    if (graph[from] === undefined) graph[from] = [];

    graph[from].push([to, cost]);
  }
  return graph;
};
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
  const stops = new Array(n).fill(Infinity);
  const pq = new MinPriorityQueue({ priority: (val) => val.cost });
  pq.enqueue({ cost: 0, source: src, steps: 0 }); // cost, src, steps

  while (pq.size() > 0) {
    const { cost, source, steps } = pq.dequeue().element;

    if (steps > stops[source] || steps > k + 1) continue; // Validate Steps

    stops[source] = steps;

    if (source === dst) return cost;

    if (graph[source] === undefined) continue;
    for (const [nextCity, nextCost] of graph[source]) {
      pq.enqueue({ cost: cost + nextCost, source: nextCity, steps: steps + 1 });
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
