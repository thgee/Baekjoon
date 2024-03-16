let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");

arr = arr.map((it) => it.split(" ").map((it) => Number(it)));
let TC = arr.shift();

for (let T = 0, l = 0; T < TC; T++) {
  let [V, E] = arr[l++];

  const graph = Array.from({ length: V + 1 }, () => []);
  const indegree = Array.from({ length: V + 1 }, () => 0);
  const dp = Array.from({ length: V + 1 }, () => 0);
  const time = [0, ...arr[l++]];

  // 그래프, 진입차수 배열 초기화
  for (let [s, e] of arr.slice(l, l + E)) {
    graph[s].push(e);
    indegree[e]++;
  }
  l += E;
  let target = arr[l++][0];

  const topologySort = () => {
    const res = [];
    const queue = [];

    // 초기 진입차수 0인 노드를 큐에 넣고 dp 업데이트
    for (let i = 1; i <= V; i++)
      if (indegree[i] === 0) {
        queue.push(i);
        dp[i] = time[i];
      }

    while (queue.length) {
      let v = queue.shift();
      res.push(v);
      for (let nv of graph[v]) {
        if (dp[nv] < dp[v] + time[nv]) dp[nv] = dp[v] + time[nv];
        if (--indegree[nv] === 0) queue.push(nv);
      }
    }
  };
  topologySort();
  console.log(dp[target]);
}
