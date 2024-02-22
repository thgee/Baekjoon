let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");
arr = arr.map((it) => it.split(" ").map((it) => Number(it)));
let [n, m] = arr.shift();
let isVisit = Array.from({ length: n + 1 }, () => 0);
let graph = Array.from({ length: n + 1 }, () => []);
for (let [s, e] of arr) {
  graph[s].push(e);
  graph[e].push(s);
}
const BFS = (x) => {
  let queue = [x];
  isVisit[x] = 1;
  while (queue.length) {
    let v = queue.shift();
    for (let i = 0; i < graph[v].length; i++) {
      let nv = graph[v][i];
      if (isVisit[nv] === 1) continue;
      isVisit[nv] = 1;
      queue.push(nv);
    }
  }
};
let cnt = 0;
for (let i = 1; i <= n; i++) {
  if (isVisit[i] === 0) {
    BFS(i);
    cnt++;
  }
}

console.log(cnt);
