let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim();
let n = Number(arr);

let DP = Array.from({ length: n + 1 }, () => Number.MAX_SAFE_INTEGER);

DP[1] = 0;

for (let i = 2; i <= n; i++) {
  if (i % 3 === 0) DP[i] = Math.min(DP[i], DP[i / 3] + 1);
  if (i % 2 === 0) DP[i] = Math.min(DP[i], DP[i / 2] + 1);
  DP[i] = Math.min(DP[i], DP[i - 1] + 1);
}

console.log(DP[n]);
