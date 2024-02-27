// 같은 파티에 참석한 사람들은 간선으로 묶음
// BFS로 진실을 아는 사람 한명에서 시작하여 모든 파티 그래프를 순회하며 knows set에 추가해줌
// know set 안에있는 사람이 참석한 파티는 모두 삭제

let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m] = arr
  .shift()
  .split(" ")
  .map((it) => Number(it));
party = arr.map((it) =>
  it
    .split(" ")
    .slice(1)
    .map((it) => Number(it))
);

let know = new Set(party.shift());
let graph = Array.from({ length: Number(n) + 1 }, () => new Set());
for (let i of know)
  for (let j of know)
    if (i !== j) {
      graph[i].add(j);
    }
for (let l = 0; l < party.length; l++)
  for (let i of party[l])
    for (let j of party[l]) {
      if (i !== j) graph[i].add(j);
    }

const BFS = () => {
  let queue = [];
  let isVisit = Array.from({ length: Number(n) + 1 }, () => false);
  for (let x of know) {
    isVisit[x] = true;
    queue.push(x);
  }
  while (queue.length) {
    let v = queue.shift();
    for (let nv of graph[v]) {
      if (isVisit[nv]) continue;
      queue.push(nv);
      know.add(nv);
      isVisit[nv] = true;
    }
  }
};
BFS();
for (let i of know) {
  for (let j = 0; j < party.length; j++) {
    if (party[j].includes(i)) party.splice(j--, 1);
  }
}

console.log(party.length);
