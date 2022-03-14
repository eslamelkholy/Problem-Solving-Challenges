const hasPath = (graph, src, dest) => {
  if (src === dest) {
    return true;
  }

  for (const neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dest) === true) {
      return true;
    }
  }
  return false;
};

const hasPathDfsStack = (graph, src, dest) => {
  const stack = [src];

  while (stack.length > 0) {
    const currentNode = stack.pop();
    if (currentNode === dest) {
      return true;
    }

    for (const neighbor of graph[currentNode]) {
      stack.push(neighbor);
    }
  }

  return false;
};

const hasPathUsingBFS = (graph, src, dest) => {
  const queue = [src];

  while (queue.length > 0) {
    const currentNode = queue.shift();

    if (currentNode === dest) {
      return true;
    }

    for (const neighbor of graph[currentNode]) {
      queue.push(neighbor);
    }
  }

  return false;
};

const graph = {
  f: ['g', 'i'],
  g: ['h'],
  i: ['g', 'k'],
  h: [],
  k: [],
  j: ['i'],
};

console.log(hasPathUsingBFS(graph, 'f', 'k'));
console.log(hasPathUsingBFS(graph, 'j', 'f'));
