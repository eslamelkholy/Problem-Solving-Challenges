/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
var countSubTrees = function (n, edges, labels) {
  const graph = buildGraph(edges);
  let array = new Array(n); //output array

  dfs(-1, 0, graph, labels, array);
  return array;
};

const dfs = (prev, curr, graph, labels, array) => {
  const ans = new Array(26).fill(0);

  for (let x of graph[curr]) {
    if (prev !== x) {
      const res = dfs(curr, x, graph, labels, array);
      for (let i = 0; i < 26; i++) ans[i] += res[i];
    }
  }
  array[curr] = ++ans[labels.charCodeAt(curr) - "a".charCodeAt(0)];
  return ans;
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

console.log(
  countSubTrees(
    (n = 7),
    (edges = [
      [0, 1],
      [0, 2],
      [1, 4],
      [1, 5],
      [2, 3],
      [2, 6],
    ]),
    (labels = "abaedcd")
  )
);
