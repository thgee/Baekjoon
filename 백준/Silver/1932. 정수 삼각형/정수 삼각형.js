let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");

arr = arr.map((it) => it.split(" ").map((it) => Number(it)));
let n = arr.shift();

const dp = Array.from({ length: n }, (v, i) => Array(i).fill(0));

dp[0] = arr[0];
for (let i = 1; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    let left = j - 1;
    let right = j;
    if (left < 0) left = right;
    if (right >= i) right = left;

    dp[i][j] = Math.max(
      dp[i - 1][left] + arr[i][j],
      dp[i - 1][right] + arr[i][j]
    );
  }
}
console.log(Math.max(...dp[n - 1]));
