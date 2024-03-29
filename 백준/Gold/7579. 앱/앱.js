// 대각선당 하나의 비숍을 둘 수 있다.
// 우상향 대각선으로 나눈 후에 각 대각선마다 가능한 칸에 비숍을 둔다.
// 가능한 칸인지 판단하는 기준은 비숍을 두기 전에 좌상향 대각선에 다른 비숍이 있는지 확인한다.

let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.split(" ").map((it) => Number(it)));

let [[N, M], memory, cost] = arr;

const minCost = Array.from({ length: M + 1 }, () => Number.MAX_SAFE_INTEGER);
minCost[0] = 0;
for (let j = 0; j < N; j++) {
  for (let i = M; i >= 1; i--) {
    // 현재 앱보다 확보해야할 메모리가 작은 경우
    if (memory[j] >= i) minCost[i] = Math.min(minCost[i], cost[j]);
    // 현재 앱보다 확보해야할 메모리가 큰 경우
    else minCost[i] = Math.min(minCost[i], cost[j] + minCost[i - memory[j]]);
  }
}

console.log(minCost[M]);
