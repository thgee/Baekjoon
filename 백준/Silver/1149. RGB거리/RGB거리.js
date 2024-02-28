// n번째 집에 r을 칠할 때의 비용 합의 최솟값 = min(n-1 집의 g를 칠하는 비용, n-1 집의 b를 칠하는 비용) + n번째 집의 r을 칠하는 비용
// n번째 집에 rgb를 각각 칠해보고 최솟값을 출력하면 됨
let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");

arr = arr.map((it) => it.split(" ").map((it) => Number(it)));
let n = Number(arr.shift());

const dp = Array.from({ length: n }, () =>
  Array(3).fill(Number.MAX_SAFE_INTEGER)
);

for (let i = 0; i < 3; i++) dp[0][i] = arr[0][i];
for (let i = 1; i < arr.length; i++) {
  for (let j = 0; j < 3; j++) {
    dp[i][j] =
      arr[i][j] + Math.min(dp[i - 1][(j + 1) % 3], dp[i - 1][(j + 2) % 3]);
  }
}

console.log(Math.min(...dp[n - 1]));
