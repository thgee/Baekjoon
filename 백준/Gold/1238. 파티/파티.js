// 최소힙 이용한 다익스트라

let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");

arr = arr.map((it) => it.split(" ").map((it) => Number(it)));
let [n, m, x] = arr.shift();

class Heap {
  constructor() {
    this.data = [];
    this.n = 0;
  }

  push(data) {
    this.n++;
    let curIdx = this.n;
    let curTime = data[1];

    while (curIdx > 1) {
      let parentIdx = Math.floor(curIdx / 2);
      let parentTime = this.data[parentIdx][1];
      if (parentTime > curTime) {
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
    let curTime = curData[1];
    // 자식이 하나도 존재하지 않을 때 까지 반복
    while (curIdx * 2 <= this.n) {
      let childIdx = curIdx * 2;
      // 자식이 둘이라면 오른쪽 자식과 왼쪽 자식을 비교하여 더 작은것을 childIdx로 지정
      if (
        childIdx < this.n &&
        this.data[childIdx][1] > this.data[childIdx + 1][1]
      )
        childIdx++;
      let childTime = this.data[childIdx][1];
      if (childTime < curTime) {
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
  let [s, e, t] = arr[i];
  graph[s].push([e, t]);
}

const reverseGraph = Array.from({ length: n + 1 }, () => []);
for (let i = 0; i < m; i++) {
  let [s, e, t] = arr[i];
  reverseGraph[e].push([s, t]);
}

const dijkstra = (x, G) => {
  const time = Array.from({ length: n + 1 }, () => Number.MAX_SAFE_INTEGER);
  time[x] = 0;
  const isVisit = Array.from({ length: n + 1 }, () => false);
  const heap = new Heap();
  heap.push([x, 0]);
  while (heap.n > 0) {
    let [v, t] = heap.pop();
    for (let [nv, nt] of G[v]) {
      if (time[v] + nt < time[nv]) {
        time[nv] = time[v] + nt;
        heap.push([nv, nt]);
      }
    }
  }

  return time;
};

let res = Array.from({ length: n + 1 }, () => 0);

let res1 = dijkstra(x, graph);
let res2 = dijkstra(x, reverseGraph).map((it, idx) => it + res[idx]);
for (let i = 1; i <= n; i++) res[i] += res1[i] + res2[i];
console.log(Math.max(...res.filter((it, idx) => idx !== 0)));
