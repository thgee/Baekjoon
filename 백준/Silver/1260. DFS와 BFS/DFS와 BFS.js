let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");
let [N, M, V] = arr[0]
  .trim()
  .split(" ")
  .map((it) => Number(it));
arr = arr.slice(1).map((it) =>
  it
    .trim()
    .split(" ")
    .map((it) => Number(it))
);
// -------------------------------------------------------------------------

let graph = Array.from({ length: N + 1 }, () => []);
let isVisited = Array.from({ length: N + 1 }, () => 0);

let resDFS = [];
let resBFS = [];

// graph 초기화
for (let edge of arr) {
  graph[edge[0]].push(edge[1]);
  graph[edge[1]].push(edge[0]);
}
for (let i = 1; i < graph.length; i++) {
  graph[i].sort((n, p) => n - p);
}

const DFS = (v) => {
  resDFS.push(v);
  isVisited[v] = 1;
  for (let nv of graph[v]) {
    if (isVisited[nv] === 0) DFS(nv);
  }
};

const BFS = () => {
  let queue = [];
  queue.push(V);
  resBFS.push(V);
  isVisited[V] = 1;
  while (queue.length) {
    let v = queue.shift();
    for (let nv of graph[v])
      if (isVisited[nv] === 0) {
        isVisited[nv] = 1;
        resBFS.push(nv);
        queue.push(nv);
      }
  }
};

DFS(V);
isVisited.fill(0);
BFS();

console.log(resDFS.join(" "));
console.log(resBFS.join(" "));
