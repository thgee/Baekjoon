let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");

class Heap {
  constructor() {
    this.data = [];
    this.n = 0;
  }
  push(data) {
    let [curData, curIdx] = [data, ++this.n];
    while (curIdx > 1) {
      let [parentData, parentIdx] = [
        this.data[Math.floor(curIdx / 2)],
        Math.floor(curIdx / 2),
      ];
      if (curData < parentData) {
        this.data[curIdx] = this.data[parentIdx];
        curIdx = parentIdx;
      } else break;
    }
    this.data[curIdx] = curData;
  }

  shift() {
    let returnData = this.data[1];
    let [curIdx, curData] = [1, this.data[this.n--]];
    while (this.n >= curIdx * 2) {
      let childIdx = curIdx * 2;
      if (
        childIdx + 1 <= this.n &&
        this.data[childIdx] > this.data[childIdx + 1]
      )
        childIdx++;
      let childData = this.data[childIdx];
      if (curData > childData) {
        this.data[curIdx] = this.data[childIdx];
        curIdx = childIdx;
      } else break;
    }
    this.data[curIdx] = curData;
    return returnData;
  }
}
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
  let heap = new Heap();
  for (let i = 1; i <= V; i++) if (indegree[i] === 0) heap.push(i);
  while (heap.n) {
    let v = heap.shift();
    res += " " + v;
    for (let nv of graph[v]) if (--indegree[nv] === 0) heap.push(nv);
  }
};
topologicalSort();
console.log(res.trim());
