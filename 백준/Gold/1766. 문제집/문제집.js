let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");

arr = arr.map((it) => it.split(" ").map((it) => Number(it)));

let [V, E] = arr.shift();

let res = "";
const graph = Array.from({ length: V + 1 }, () => []);
const indegree = Array.from({ length: V + 1 }, () => 0);

for (let [s, e] of arr) {
  graph[s].push(e);
  indegree[e]++;
}

const topologicalSort = () => {
  let queue = [];
  let flag = 0;
  for (let i = 1; i <= V; i++) if (indegree[i] === 0) queue.push(i);
  while (queue.length) {
    if (flag) {
      queue.sort((n, p) => n - p);
      flag = 0;
    }
    let v = queue.shift();
    res += " " + v;
    for (let nv of graph[v])
      if (--indegree[nv] === 0) {
        queue.push(nv);
        flag = 1;
      }
  }
};
topologicalSort();
console.log(res.trim());
