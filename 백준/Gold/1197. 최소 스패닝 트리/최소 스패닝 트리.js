let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");
arr = arr.map((it) => it.split(" ").map((it) => Number(it)));
let [V, E] = arr.shift();
const edges = arr;

class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n + 1 }, (_, i) => i);
  }

  // 루트노드를 재귀로 찾아서 반환해주는 함수
  // parent 배열의 원소들을 루트노드로 바로 연결하는 경로압축 기능도 함
  find = (v) => {
    if (this.parent[v] === v) return v; // 루트노드인 경우
    return (this.parent[v] = this.find(this.parent[v]));
  };

  // v1과 v2의 루트를 같게 만들어주는 함수
  union = (v1, v2) => {
    let root1 = this.find(v1),
      root2 = this.find(v2);
    if (root1 === root2) return;
    root1 < root2 ? (this.parent[root2] = root1) : (this.parent[root1] = root2);
  };

  // v1과 v2의 부모가 같은지 판단하는 함수
  isConnected = (v1, v2) => {
    return this.find(v1) === this.find(v2);
  };
}

const kruskal = () => {
  const mst = []; // 최소신장트리 저장
  let cost = 0; // 최소 비용 저장
  const uf = new UnionFind(V);

  // 간선 정렬
  edges.sort((n, p) => n[2] - p[2]);

  for (let [v1, v2, w] of edges) {
    if (uf.isConnected(v1, v2)) continue; // 이미 연결되어있는 정점이라면 continue
    uf.union(v1, v2); // 정점 v1와 v2를 연결
    mst.push([v1, v2, w]);
    cost += w;
  }

  return cost;
};

console.log(kruskal());
