let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => Number(it));

let n = arr[0];

let dp = Array.from({ length: n + 1 }, () => 0);
dp[1] = arr[1];
dp[2] = arr[1] + arr[2];
dp[3] = Math.max(arr[1] + arr[3], arr[2] + arr[3]);
for (let i = 4; i <= n; i++) {
  dp[i] = Math.max(dp[i - 2] + arr[i], dp[i - 3] + arr[i - 1] + arr[i]);
}

console.log(dp[n]);

