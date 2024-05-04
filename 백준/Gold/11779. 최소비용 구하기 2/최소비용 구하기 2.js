let fs = require("fs");
const { Interface } = require("readline");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.split(" ").map((it) => Number(it)));

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

let [[V], [E]] = [arr.shift(), arr.shift()];
let [start, end] = arr.pop();

// 인접리스트 초기화
const graph = Array.from({ length: V + 1 }, () => []);
for (let [s, e, w] of arr) {
  graph[s].push([e, w]);
}

const dijkstra = (start) => {
  const dist = Array.from({ length: V + 1 }, () => Number.MAX_SAFE_INTEGER);
  const path = Array.from({ length: V + 1 }, () => "");
  dist[start] = 0;

  const isVisit = Array.from({ length: V + 1 }, () => false);
  const heap = new Heap();
  heap.push([start, 0, `${start}`]);

  while (heap.n > 0) {
    let [v, w, p] = heap.pop();
    if (isVisit[v]) continue;
    path[v] = p;
    isVisit[v] = true;
    for (let [nv, nw] of graph[v]) {
      if (w + nw < dist[nv]) {
        dist[nv] = w + nw;
        heap.push([nv, dist[nv], p + ` ${nv}`]);
      }
    }
  }
  return [dist, path];
};

let [dist, path] = dijkstra(start);
let res = [dist[end], path[end].split(" ").length, path[end]];
console.log(res.join("\n"));
