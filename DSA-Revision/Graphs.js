


// === Graphs ===

// 1. BFS and DFS
function bfs(graph, start) {
  const visited = new Set(), queue = [start];
  while (queue.length) {
    const node = queue.shift();
    if (!visited.has(node)) {
      console.log(node);
      visited.add(node);
      for (let neighbor of graph[node]) queue.push(neighbor);
    }
  }
}

function dfs(graph, node, visited = new Set()) {
  if (visited.has(node)) return;
  console.log(node);
  visited.add(node);
  for (let neighbor of graph[node]) dfs(graph, neighbor, visited);
}

// 2. Connected Components
function countComponents(n, edges) {
  const graph = Array.from({ length: n }, () => []);
  for (let [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }
  const visited = new Set();
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      dfs(graph, i, visited);
      count++;
    }
  }
  return count;
}

// 3. Dijkstra’s Algorithm
function dijkstra(graph, start) {
  const dist = Array(graph.length).fill(Infinity);
  dist[start] = 0;
  const pq = [[0, start]];
  while (pq.length) {
    const [cost, node] = pq.shift();
    if (cost > dist[node]) continue;
    for (const [neighbor, weight] of graph[node]) {
      const newDist = cost + weight;
      if (newDist < dist[neighbor]) {
        dist[neighbor] = newDist;
        pq.push([newDist, neighbor]);
      }
    }
    pq.sort((a, b) => a[0] - b[0]);
  }
  return dist;
}

// 4. Topological Sort - Kahn's Algorithm
function kahnTopoSort(graph) {
  const inDegree = Array(graph.length).fill(0);
  for (let u in graph) {
    for (let v of graph[u]) inDegree[v]++;
  }
  const queue = [], result = [];
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }
  while (queue.length) {
    const node = queue.shift();
    result.push(node);
    for (let neighbor of graph[node]) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) queue.push(neighbor);
    }
  }
  return result;
}

// 5. Union Find / Disjoint Set
class UnionFind {
  constructor(n) {
    this.parent = Array(n).fill(0).map((_, i) => i);
  }
  find(x) {
    if (this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]);
    return this.parent[x];
  }
  union(x, y) {
    const px = this.find(x), py = this.find(y);
    if (px !== py) this.parent[px] = py;
  }
}

// 6. Kruskal’s MST
function kruskal(n, edges) {
  edges.sort((a, b) => a[2] - b[2]);
  const uf = new UnionFind(n);
  let mst = 0;
  for (let [u, v, w] of edges) {
    if (uf.find(u) !== uf.find(v)) {
      uf.union(u, v);
      mst += w;
    }
  }
  return mst;
}

// 7. Cycle Detection
// Undirected Graph
function hasCycleUndirected(graph, node, visited = new Set(), parent = -1) {
  visited.add(node);
  for (let neighbor of graph[node]) {
    if (!visited.has(neighbor)) {
      if (hasCycleUndirected(graph, neighbor, visited, node)) return true;
    } else if (neighbor !== parent) {
      return true;
    }
  }
  return false;
}

// Directed Graph
function hasCycleDirected(graph) {
  const visited = Array(graph.length).fill(0); // 0=unvisited, 1=visiting, 2=visited
  function dfs(node) {
    if (visited[node] === 1) return true;
    if (visited[node] === 2) return false;
    visited[node] = 1;
    for (let neighbor of graph[node]) {
      if (dfs(neighbor)) return true;
    }
    visited[node] = 2;
    return false;
  }
  for (let i = 0; i < graph.length; i++) {
    if (dfs(i)) return true;
  }
  return false;
}
