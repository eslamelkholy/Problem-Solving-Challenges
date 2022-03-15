# Graphs

Graph is probably the data structure that has the closest resemblance to our daily life. There are many types of graphs describing the relationships in real life. For instance, our friend circle is a huge “graph”.

### Example in Real Life

social graph of friendship

### Graph Types

There are many types of “graphs”. In this Explore Card, we will introduce three types of graphs: undirected graphs, directed graphs, and weighted graphs.

- Undirected graphs
- Directed graphs
- Weighted graphs

#### Undirected Graphs

The edges between any two vertices in an “undirected graph” do not have a direction, indicating a two-way relationship.
![Undirected graphs](/public/Undirectedgraphs.png)

#### Directed Graphs

The edges between any two vertices in a “directed graph” graph are directional.
![Directed graph](/public/Directedgraphs.png)

#### Weighted Graphs

Each edge in a “weighted graph” has an associated weight. The weight can be of any metric, such as time, distance, size, etc. The most commonly seen “weighted map” in our daily life might be a city map. In Figure 3, each edge is marked with the distance, which can be regarded as the weight of that edge.
![Weighted graphs](/public/Weightedgraphs.png)

### The Definition of “graph” and Terminologies

“Graph” is a non-linear data structure consisting of vertices and edges. There are a lot of terminologies to describe a graph. If you encounter an unfamiliar term in the following Explore Card, you may look up the definition below.

- Vertex: In Figure 1, nodes such as A, B, and C are called vertices of the graph.
- Edge: The connection between two vertices are the edges of the graph. In Figure 1, the connection between person A and B is an edge of the graph.
- Path: the sequence of vertices to go through from one vertex to another. In Figure 1, a path from A to C is [A, B, C], or [A, G, B, C], or [A, E, F, D, B, C]. <br/>
  **Note**: there can be multiple paths between two vertices.
- Cycle: a path where the starting point and endpoint are the same vertex. In Figure 1, [A, B, D, F, E] forms a cycle. Similarly, [A, G, B] forms another cycle.
- Negative Weight Cycle: In a “weighted graph”, if the sum of the weights of all edges of a cycle is a negative value, it is a negative weight cycle. In Figure 4, the sum of weights is -3.
- Connectivity: if there exists at least one path between two vertices, these two vertices are connected. In Figure 1, A and C are connected because there is at least one path
- Degree of a Vertex: the term “degree” applies to unweighted graphs. The degree of a vertex is the number of edges connecting the vertex. In Figure 1, the degree of vertex A is 3 because three edges are connecting it.
- In-Degree: “in-degree” is a concept in directed graphs. If the in-degree of a vertex is d, there are d directional edges incident to the vertex. In Figure 2, A’s indegree is 1, i.e., the edge from F to A.
- Out-Degree: “out-degree” is a concept in directed graphs. If the out-degree of a vertex is d, there are d edges incident from the vertex. In Figure 2, A’s outdegree is 3, i,e, the edges A to B, A to C, and A to G.

#### Traverse Graph

1. Using DFS Recursive Solution

```javascript
const dfsPrint = (graph, sourceNode) => {
  console.log(sourceNode);
  for (const neighbor of graph[sourceNode]) {
    dfsPrint(graph, neighbor);
  }
};
```

2. Using DFS With Stack

```javascript
const dfsPrint = (graph, sourceNode) => {
  const stack = [sourceNode];

  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);

    for (const neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
};
```

3. Using BFS With Queue

```javascript
const bfs = (graph, sourceNode) => {
  const queue = [sourceNode];

  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);

    for (const neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
};
```

### Starting WITH GRAPH Problems

- Has Path Problem Check if Graph Has Path From Source >>> Destination

```javascript
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
```

```javascript
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
```

```javascript
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
```

- Undirected Graph Hash Path Problem **Mark Visited**

```javascript
const undirectedPathUsingDFSRecursive = (edges, source, dest) => {
  const graph = buildGraph(edges);
  const visited = new Set();

  return DFShasPath(graph, source, dest, visited);
};

const DFShasPath = (graph, src, dest, visited) => {
  if (src === dest) return true;
  if (visited.has(src)) return false;

  visited.add(src);

  for (const neighbor of graph[src]) {
    if (DFShasPath(graph, neighbor, dest, visited)) {
      return true;
    }
  }

  return false;
};
```

- Connected Component Problem

```javascript
const connectedComponentCount = (graph) => {
  const visited = new Set();
  let counter = 0;

  for (const node in graph) {
    if (dfs(graph, Number(node), visited)) {
      counter++;
    }
  }

  return counter;
};

const dfs = (graph, currentNode, visited) => {
  if (visited.has(currentNode)) return false;

  visited.add(currentNode);

  for (const neighbor of graph[currentNode]) {
    dfs(graph, neighbor, visited);
  }

  return true; // The Whole Explore Done
};
```

- Largest Component

```javascript
const largestComponent = (graph) => {
  const visited = new Set();
  let largestSize = 0;

  for (const node in graph) {
    const size = exploreGrahs(graph, node, visited);
    if (!size) continue;

    largestSize = Math.max(largestSize, size);
  }
  return largestSize;
};

const exploreGrahs = (graph, node, visited) => {
  if (visited.has(node)) return false;
  visited.add(node);

  let size = 1;
  for (const neighbor of graph[node]) {
    size += exploreGrahs(graph, neighbor, visited);
  }

  return size;
};
```
