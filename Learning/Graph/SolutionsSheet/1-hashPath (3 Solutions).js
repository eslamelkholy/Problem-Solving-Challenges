const hasPathDFS = (graph, src, dst) => {
  const stack = [src];

  while (stack.length > 0) {
    const currentNode = stack.pop();

    if (currentNode === dst) {
      return true;
    }

    for (const neighbor of graph[currentNode]) {
      stack.push(neighbor);
    }
  }

  return false;
};

const hasPathBFS = (graph, src, dst) => {
  const queue = [src];

  while (queue.length > 0) {
    const currentNode = queue.shift();

    if (currentNode === dst) {
      return true;
    }

    for (const neighbor of graph[currentNode]) {
      queue.push(neighbor);
    }
  }

  return false;
};

const hasPathDFSRecursive = (graph, src, dst) => {
  return dfs(graph, src, dst);
};

const dfs = (graph, node, target) => {
  if (node === target) return true;

  for (const neighbor of graph[node]) {
    if (dfs(graph, neighbor, target)) return true;
  }

  return false;
};

const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: [],
};

console.log(hasPath(graph, 'f', 'k')); // true
