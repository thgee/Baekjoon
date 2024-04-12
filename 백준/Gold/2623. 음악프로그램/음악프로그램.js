let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.split(" ").map((it) => Number(it)));

let [N] = arr.shift();

const graph = Array.from({ length: N + 1 }, () => []);
const inDegree = Array.from({ length: N + 1 }, () => 0);

for (let l of arr) {
  for (let i = 1; i < l.length - 1; i++) {
    graph[l[i]].push(l[i + 1]);
    inDegree[l[i + 1]]++;
  }
}

const topologySort = () => {
  const res = [];
  const queue = [];

  // 진입차수가 0인 노드 큐에 삽입
  for (let i = 1; i <= N; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  while (queue.length) {
    let v = queue.shift();
    res.push(v);
    // v의 이웃 정점들의 진입차수를 하나 줄이고, 진입차수가 0이 되면 큐에 삽입
    for (let nv of graph[v]) {
      if (--inDegree[nv] === 0) queue.push(nv);
    }
  }
  return res;
};

const res = topologySort();
console.log(res.length === N ? res.join("\n") : 0);
