const graph = {};
graph['you'] = ['alice', 'bob', 'claire'];
graph['bob'] = ['anuj', 'peggy'];
graph['alice'] = ['peggy'];
graph['claire'] = ['thom', 'jonny'];

console.log(graph);

const isOurTarget = (name, target) => name === target;

const traverseGrahpBFS = (startPoint, target) => {
  let searchQueue = [...graph[startPoint]];
  const searched = [];

  while (searchQueue.length > 0) {
    const node = searchQueue.shift();
    if (searched.includes(node)) continue;

    if (isOurTarget(target, node)) {
      return console.log('Our Target Has Been Founded = ', node);
    }
    searched.push(node);
    if (graph[node]) searchQueue = [...searchQueue, ...graph[node]];
  }

  return false;
};

console.log(traverseGrahpBFS('you', 'claire'));

/**
 * So Here we Can Express The Running Time as O(number of People + number Of Edges)
 * it's More Commonly Written as O(V+E)
 */
