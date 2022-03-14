/**
 *
 * 1- Solution Using STACK
 */
// const dfsPrint = (graph, sourceNode) => {
//   const stack = [sourceNode];

//   while (stack.length > 0) {
//     const current = stack.pop();
//     console.log(current);

//     for (const neighbor of graph[current]) {
//       stack.push(neighbor);
//     }
//   }
// };

/**
 *
 * 1- Solution Using Recursive And This is better with less code
 */
const dfsPrint = (graph, sourceNode) => {
  console.log(sourceNode);
  for (const neighbor of graph[sourceNode]) {
    dfsPrint(graph, neighbor);
  }
};

const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  e: [],
  d: ['f'],
  f: [],
};

console.log(dfsPrint(graph, 'a'));
