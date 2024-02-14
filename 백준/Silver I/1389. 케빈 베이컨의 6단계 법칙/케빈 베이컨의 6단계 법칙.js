let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");
let [N, M] = arr
  .shift()
  .trim()
  .split(" ")
  .map((it) => Number(it));
arr = arr.map((it) =>
  it
    .trim()
    .split(" ")
    .map((it) => Number(it))
);

let graph = Array.from({ length: N + 1 }, () => []);
let kevin = Array.from({ length: N + 1 }, () => 0);

for (let [s, e] of arr) {
  graph[s].push(e);
  graph[e].push(s);
}

const BFS = (s) => {
  let queue = [[s, 0]];
  let isVisit = Array.from({ length: N + 1 }, () => false);
  isVisit[s] = true;
  while (queue.length) {
    let [v, l] = queue.shift();
    kevin[s] += l;
    for (let x of graph[v]) {
      if (isVisit[x]) continue;
      queue.push([x, l + 1]);
      isVisit[x] = true;
    }
  }
};

for (let i = 1; i <= N; i++) {
  BFS(i);
}

let min = Number.MAX_SAFE_INTEGER;
let res = -1;
for (let i = 1; i <= N; i++) {
  if (min > kevin[i]) {
    res = i;
    min = kevin[i];
  }
}

console.log(res);
