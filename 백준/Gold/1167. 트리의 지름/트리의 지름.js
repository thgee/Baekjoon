// DFS로 임의의 노드에서 거리가 최대가 되는 특정 노드를 구한다
// 구한 노드로부터 DFS를 다시 돌면서 최대 거리를 구한다.
// 원리 : 트리는 사이클이 없기 때문에 어느 정점에서 시작하든 최장경로를 구해보면
//        트리 전체의 최장 경로의 시작노드 혹은 끝노드에 도착한다.
//        따라서 이렇게 트리의 최장경로의 시작점 혹은 끝점을 구하고,
//        해당 노드에서부터 DFS를 한번 더 돌려보면 반대쪽 노드까지의 거리를 구할 수 있다.

let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");

arr = arr.map((it) => it.split(" ").map((it) => Number(it)));
let n = Number(arr.shift());
arr.map((it) => it.pop());

// 그래프 초기화
const graph = Array.from({ length: n + 1 }, () => []);
for (let i = 0; i < arr.length; i++) {
  let v = arr[i].shift();
  for (let j = 0; j < arr[i].length; j += 2) {
    graph[v].push([arr[i][j], arr[i][j + 1]]);
  }
}

let res = 0;
let maxPathVertex;

// DFS
const isVisit = Array.from({ length: n + 1 }, () => false);
const DFS = (v, dis) => {
  for (let [nv, ndis] of graph[v]) {
    if (isVisit[nv]) continue;
    isVisit[nv] = true;
    DFS(nv, dis + ndis);
    isVisit[nv] = false;
  }
  if (dis > res) {
    res = dis;
    maxPathVertex = v;
  }
};

isVisit[1] = true;
DFS(1, 0);
isVisit[1] = false;

isVisit[maxPathVertex] = true;
DFS(maxPathVertex, 0);
isVisit[maxPathVertex] = false;

console.log(res);
