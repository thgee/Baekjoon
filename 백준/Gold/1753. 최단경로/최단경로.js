let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");

arr = arr.map((it) => it.split(" ").map((it) => Number(it)));

let [V, E] = arr[0];
let K = arr[1];
arr = arr.slice(2);

const graph = Array.from({ length: V + 1 }, () => []);
for (let [s, e, v] of arr) graph[s].push([e, v]);

const dijkstra = (s) => {
  const isVisit = Array.from({ length: V + 1 }, () => false);
  const dist = Array.from({ length: V + 1 }, () => Number.MAX_SAFE_INTEGER);
  dist[s] = 0;

  const findMinVertex = () => {
    let [min, minV] = [Number.MAX_SAFE_INTEGER, -1];
    for (let i = 1; i <= V; i++) {
      if (isVisit[i]) continue;
      if (dist[i] <= min) {
        min = dist[i];
        minV = i;
      }
    }
    return minV;
  };

  for (let k = 0; k < V; k++) {
    let v = findMinVertex();
    isVisit[v] = true;
    for (let [nv, nd] of graph[v]) {
      if (dist[nv] > dist[v] + nd) dist[nv] = dist[v] + nd;
    }
  }

  return dist;
};

console.log(
  dijkstra(K)
    .slice(1)
    .map((it) => (it === Number.MAX_SAFE_INTEGER ? "INF" : it))
    .join("\n")
);
