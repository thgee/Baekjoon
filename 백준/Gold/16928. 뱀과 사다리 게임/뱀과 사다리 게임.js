// 냅색알고리즘
// 사다리 혹은 뱀의 배열의 시작점에 도달한 경우, 끝점과 시작점의 최솟값을 끝점에 갱신해준다
// 주사위 1~6 을 동전이라고 생각하고 풀기
// 사다리 혹은 뱀의 시작점에서 주사위를 굴릴수 없으므로, 사다리와 뱀의 시작점은 아주 큰 값으로 유지한다.
// 뱀을 타고 내려왔을 경우 최단거리가 될 수도 있기 때문에, 뱀을 하나씩 탈 때 마다 처음부터 다시 dp를 갱신한다.

let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");
arr = arr.map((it) => it.split(" ").map((it) => Number(it)));
let [n, m] = arr.shift();
let dp = Array.from({ length: 101 }, () => Number.MAX_SAFE_INTEGER);
let ladder = arr.slice(0, n);
let snake = arr.slice(n, n + m).sort((n, p) => n[1] - p[1]);

for (let k = 0; k < m + 1; k++)
  for (let i = 1; i <= 100; i++) {
    if (i <= 7) dp[i] = 1;
    for (let dice = 1; dice <= 6; dice++) {
      if (i >= 8) dp[i] = Math.min(dp[i], dp[i - dice] + 1);
      for (let [s, e] of arr) {
        if (i === s) {
          dp[e] = Math.min(dp[e], dp[i]);
          dp[s] = Number.MAX_SAFE_INTEGER;
        }
      }
    }
  }

console.log(dp[100]);
