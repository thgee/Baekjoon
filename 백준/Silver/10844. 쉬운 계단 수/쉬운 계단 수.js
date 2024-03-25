let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((it) => Number(it));

let N = arr[0];

const dp = Array.from({ length: 101 }, () => Array(9).fill(0));

for (let i = 1; i <= 9; i++) {
  dp[1][i] = 1;
}

for (let i = 2; i <= N; i++) {
  for (let j = 0; j <= 9; j++) {
    if (j === 0) dp[i][j] = dp[i - 1][j + 1];
    else if (j === 9) dp[i][j] = dp[i - 1][j - 1];
    else dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % 1000000000;
  }
}

let res = dp[N].reduce((acc, cur) => (acc + cur) % 1000000000, 0);
console.log(res);
