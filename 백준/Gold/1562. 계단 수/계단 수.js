let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((it) => Number(it));

let N = arr[0];
const mod = 1000000000;
const dp = Array.from({ length: 101 }, () =>
  Array.from({ length: 10 }, () => Array.from({ length: 1 << 10 }, () => 0))
);

for (let i = 1; i <= 9; i++) {
  dp[1][i][1 << i] = 1;
}
for (let i = 1; i < N; i++) {
  for (let j = 0; j <= 9; j++) {
    for (let b = 0; b < 1 << 10; b++) {
      if (j === 0) {
        dp[i + 1][j + 1][b | (1 << (j + 1))] += dp[i][j][b] % mod;
        dp[i + 1][j + 1][b | (1 << (j + 1))] %= mod;
      } else if (j === 9) {
        dp[i + 1][j - 1][b | (1 << (j - 1))] += dp[i][j][b] % mod;
        dp[i + 1][j - 1][b | (1 << (j - 1))] %= mod;
      } else {
        dp[i + 1][j + 1][b | (1 << (j + 1))] += dp[i][j][b] % mod;
        dp[i + 1][j - 1][b | (1 << (j - 1))] += dp[i][j][b] % mod;
        dp[i + 1][j + 1][b | (1 << (j + 1))] %= mod;
        dp[i + 1][j - 1][b | (1 << (j - 1))] %= mod;
      }
    }
  }
}

let res = 0;
for (let x of dp[N]) {
  res += x[1023];
  res %= mod;
}
console.log(res);
