let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");

arr = arr.map((it) => it.split(" ").map((it) => Number(it)));
let [n, m] = arr.shift();
let [u, v] = arr.pop();

class Heap {
  constructor() {
    this.data = [];
    this.n = 0;
  }

  push(data) {
    this.n++;
    let curIdx = this.n;
    let curDis = data[1];

    while (curIdx > 1) {
      let parentIdx = Math.floor(curIdx / 2);
      let parentDis = this.data[parentIdx][1];
      if (parentDis > curDis) {
        this.data[curIdx] = this.data[parentIdx];
        curIdx = parentIdx;
      } else break;
    }
    this.data[curIdx] = data;
  }

  pop() {
    if (this.n <= 0) return;
    let returnData = this.data[1];
    let curIdx = 1;
    let curData = this.data[this.n--];
    let curDis = curData[1];
    // 자식이 하나도 존재하지 않을 때 까지 반복
    while (curIdx * 2 <= this.n) {
      let childIdx = curIdx * 2;
      // 자식이 둘이라면 오른쪽 자식과 왼쪽 자식을 비교하여 더 작은것을 childIdx로 지정
      if (
        childIdx < this.n &&
        this.data[childIdx][1] > this.data[childIdx + 1][1]
      )
        childIdx++;
      let childDis = this.data[childIdx][1];
      if (childDis < curDis) {
        this.data[curIdx] = this.data[childIdx];
        curIdx = childIdx;
      } else break;
    }
    this.data[curIdx] = curData;
    return returnData;
  }
}

// 그래프 초기화
const graph = Array.from({ length: n + 1 }, () => []);
for (let i = 0; i < m; i++) {
  let [s, e, d] = arr[i];
  graph[s].push([e, d]);
  graph[e].push([s, d]);
}

const dijkstra = (x) => {
  const dis = Array.from({ length: n + 1 }, () => Number.MAX_SAFE_INTEGER);
  dis[x] = 0;
  const isVisit = Array.from({ length: n + 1 }, () => false);
  const heap = new Heap();
  heap.push([x, 0]);
  while (heap.n > 0) {
    let [v, t] = heap.pop();
    if (isVisit[v]) continue;
    isVisit[v] = true;
    for (let [nv, nt] of graph[v]) {
      if (t + nt < dis[nv]) {
        dis[nv] = t + nt;
        heap.push([nv, dis[nv]]);
      }
    }
  }
  return dis;
};

let sToU = dijkstra(1)[u];
let sToV = dijkstra(1)[v];
let uToV = dijkstra(u)[v];
let uToN = dijkstra(u)[n];
let vToN = dijkstra(v)[n];

let res = Math.min(sToU + uToV + vToN, sToV + uToV + uToN);
console.log(res >= Number.MAX_SAFE_INTEGER ? -1 : res);
