/**
 * @param {number[][]} graph
 * @return {boolean}
 * Tests
 * [[1,3],[0,2],[1,3],[0,2]] >> true
 * [[1,2,3],[0,2],[0,1,3],[0,2]] >> false
 * [[4,1],[0,2],[1,3],[2,4],[3,0]] >> false
 * [[1],[0,3],[3],[1,2]] >> true
 * [[3],[2,4],[1],[0,4],[1,3]] >> TRUE
 */
var isBipartite = function (graph) {
  // Let's Assume that any graph is Bipartite
  let result = true;

  const setOne = {};
  const setTwo = {};
  graph = graph.filter((ele) => ele.length > 1);
  const noOfEdges = graph.length / 2;
  for (let i = 0; i < graph.length; i++) {
    const element = graph[i];
    for (let k = 0; k < element.length; k++) {
      const element2 = element[k];
      if (setOne[element2]) setOne[element2] = setOne[element2] + 1;
      else if (setTwo[element2]) setTwo[element2] = setTwo[element2] + 1;
      else {
        Object.values(setOne).length <= Object.values(setTwo).length
          ? (setOne[element2] = 1)
          : (setTwo[element2] = 1);
      }
    }
  }
  console.log(setOne);
  console.log(setTwo);
  if (Object.values(setOne).length !== Object.values(setTwo).length) return false;
  const edges = [...Object.values(setOne), ...Object.values(setTwo)];
  for (let j = 0; j < edges.length; j++) {
    const element = edges[j];
    console.log('noOfEdges ', Math.floor(noOfEdges), 'element ', element);
    if (element !== Math.floor(noOfEdges)) return false;
  }
  return result;
};

// true
// console.log(
//   isBipartite([
//     [1, 3],
//     [0, 2],
//     [1, 3],
//     [0, 2],
//   ])
// );

// false
// console.log(
//   isBipartite([
//     [1, 2, 3],
//     [0, 2],
//     [0, 1, 3],
//     [0, 2],
//   ])
// );

// false
// console.log(
//   isBipartite([
//     [4, 1],
//     [0, 2],
//     [1, 3],
//     [2, 4],
//     [3, 0],
//   ])
// );

// true
// console.log(isBipartite([[1], [0, 3], [3], [1, 2]]));
// true
console.log(
  isBipartite([
    [4, 1],
    [0, 2],
    [1, 3],
    [2, 4],
    [3, 0],
  ])
);
