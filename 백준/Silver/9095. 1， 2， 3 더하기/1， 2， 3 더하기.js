let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");

arr = arr.map((it) => Number(it));
let n = arr.shift();

let dp = Array.from({ length: n + 1 }, () => 0);

dp[1] = 1;
dp[2] = 2;
dp[3] = 4;
let res = [];
let max = Math.max(...arr);
for (let i = 4; i <= max; i++) {
  dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
}

for (let x of arr) {
  res.push(dp[x]);
}
console.log(res.join("\n"));
