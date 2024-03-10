let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");

arr = arr.map((it) => it.split(" ").map((it) => Number(it)));
let [V] = arr.shift();
const graph = Array.from({ length: V + 1 }, () => []);

for (let [v1, v2, w] of arr) {
  graph[v1].push([v2, w]);
  graph[v2].push([v1, w]);
}

const dijkstra = (start) => {
  const isVisit = Array.from({ length: V + 1 }, () => false);
  const dist = Array.from({ length: V + 1 }, () => Number.MAX_SAFE_INTEGER);
  dist[start] = 0;

  const findMin = () => {
    let idx = -1,
      min = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i <= V; i++) {
      if (isVisit[i]) continue;
      if (dist[i] < min) {
        min = dist[i];
        idx = i;
      }
    }
    return idx;
  };

  for (let k = 0; k < V - 1; k++) {
    let v = findMin();
    isVisit[v] = true;
    for (let [nv, nw] of graph[v]) {
      if (dist[nv] > dist[v] + nw) dist[nv] = dist[v] + nw;
    }
  }
  return dist;
};

let tmp = dijkstra(1);
tmp = dijkstra(tmp.indexOf(Math.max(...tmp.slice(1))));
console.log(Math.max(...tmp.slice(1)));
