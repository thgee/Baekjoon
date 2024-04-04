// 사이클 내에 있는 정점들은 isVisit = 2로 만듬
// 마지막에 isVisit = 1 인 정점들이 팀을 이루지 못한 정점임

let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) =>
    it
      .trim()
      .split(" ")
      .map((it) => Number(it))
  );

const BFS = (isVisit, graph, s) => {
  let cnt = 0;
  let v = s,
    nv;
  let check = [];
  while (1) {
    check.push(v);
    nv = graph[v];
    if (isVisit[v] === 2) break;
    if (isVisit[nv] === -1) {
      isVisit[v] = -1;
      cnt++;
      break;
    }
    isVisit[v]++;
    v = nv;
  }

  for (let x of check) {
    if (isVisit[x] === 1) {
      isVisit[x] = -1;
      cnt++;
    }
  }
  return cnt;
};

let [TC] = arr.shift();
let res = [];
for (let t = 0, i = 0; t < TC; t++) {
  let [V] = arr[i++];
  const graph = Array.from({ length: V + 1 }, () => -1);
  const isVisit = Array.from({ length: V + 1 }, () => 0);

  // 그래프 생성
  for (let j = 0; j < arr[i].length; j++) {
    graph[j + 1] = arr[i][j];
  }
  i++;

  let cnt = 0;
  for (let k = 1; k <= V; k++) {
    if (isVisit[k] === 0) {
      cnt += BFS(isVisit, graph, k);
    }
  }
  res.push(cnt);
}

console.log(res.join("\n"));
