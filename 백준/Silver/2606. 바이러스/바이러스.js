let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(arr.shift());
let m = Number(arr.shift());
arr = arr.map((it) =>
  it
    .trim()
    .split(" ")
    .map((it) => Number(it))
);

// 그래프 초기화
let graph = Array.from({ length: n + 1 }, () => []);
for (let [s, e] of arr) {
  graph[s].push(e);
  graph[e].push(s);
}
let cnt = -1;
const BFS = () => {
  let queue = [1];
  let isVisit = Array.from({ length: n + 1 }, () => 0);
  isVisit[1] = 1;
  while (queue.length) {
    let v = queue.shift();
    cnt++;
    for (let nv of graph[v]) {
      if (isVisit[nv] === 1) continue;
      isVisit[nv] = 1;
      queue.push(nv);
    }
  }
};

BFS();
console.log(cnt);
