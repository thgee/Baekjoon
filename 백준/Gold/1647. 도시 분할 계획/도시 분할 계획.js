let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.split(" ").map((it) => Number(it)));

let [V, E] = arr.shift();

class UnionFind {
  constructor() {
    this.parent = Array.from({ length: V + 1 }, (_, i) => i);
  }

  find(v) {
    if (this.parent[v] === v) return v;
    return (this.parent[v] = this.find(this.parent[v]));
  }

  union(a, b) {
    let root1 = this.find(a),
      root2 = this.find(b);
    if (root1 === root2) return;
    let max = Math.max(root1, root2);
    let min = Math.min(root1, root2);
    this.parent[max] = this.parent[min];
  }

  isConnected(a, b) {
    return this.find(a) === this.find(b);
  }
}

arr.sort((n, p) => n[2] - p[2]);
let cost = 0;
let lastCost;

const Kruskal = () => {
  const uf = new UnionFind();
  for (let [s, e, w] of arr) {
    if (uf.isConnected(s, e)) continue; // 연결되어있다면 continue
    uf.union(s, e); // 두 정점을 연결
    cost += w; // 비용 누적
    lastCost = w; // 마지막으로 연결된 간선의 비용 저장
  }
};

Kruskal();
cost -= lastCost;
console.log(cost);
