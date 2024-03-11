let fs = require("fs");
const { isKeyObject } = require("util/types");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");
arr = arr.map((it) => it.split(" ").map((it) => Number(it)));

let V = arr.shift()[0];
let E = arr.shift()[0];
let [start, end] = arr.pop();

const graph = Array.from({ length: V + 1 }, () => []);

for (let [s, e, w] of arr) graph[s].push([e, w]);

const dijkstra = () => {
  const isVisit = Array.from({ length: V + 1 }, () => false);
  const dist = Array.from({ length: V + 1 }, () => Number.MAX_SAFE_INTEGER);
  dist[start] = 0;
  const findMInDistVertex = () => {
    let idx = -1,
      min = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i <= V; i++) {
      if (isVisit[i]) continue;
      if (min > dist[i]) {
        min = dist[i];
        idx = i;
      }
    }
    return idx;
  };

  for (let k = 0; k < V - 1; k++) {
    let v = findMInDistVertex();
    if (v === -1) break;
    isVisit[v] = true;
    for (let [nv, nw] of graph[v]) {
      if (dist[nv] > dist[v] + nw) dist[nv] = dist[v] + nw;
    }
  }
  return dist[end];
};

console.log(dijkstra());
