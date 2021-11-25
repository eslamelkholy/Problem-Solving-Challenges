const graph = {};
graph['you'] = ['alice', 'bob', 'claire'];
graph['bob'] = ['anuj', 'peggy'];
graph['alice'] = ['peggy'];
graph['claire'] = ['thom', 'jonny'];

console.log(graph);

const isOurTarget = (name, target) => name === target;

const traverseGrahpBFS = (startPoint, target) => {
  let searchQueue = [...graph[startPoint]];
  let searched = [];

  while (searchQueue.length > 0) {
    const person = searchQueue.shift(); // Return First Element of Graph
    if (searched.includes(person)) continue;

    if (isOurTarget(person, target)) {
      console.log(`Our Target has been Target Name = ${target}`);
      return true;
    }

    if (graph[person]) searchQueue = [...searchQueue, ...graph[person]];
    searched.push(person);
  }
  return false;
};

console.log(traverseGrahpBFS('you', 'thom'));

/**
 * So Here we Can Express The Running Time as O(number of People + number Of Edges)
 * it's More Commonly Written as O(V+E)
 */
