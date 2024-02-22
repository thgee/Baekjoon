let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();
input = input.map((it) => it.split(" ").map((it) => Number(it)));
arr = input.shift();

let res = [];
let dp = [];

dp[0] = 0;
dp[1] = arr[0];
for (let i = 2; i <= arr.length; i++) {
  dp[i] = dp[i - 1] + arr[i - 1];
}

for (let [s, e] of input) {
  res.push(dp[e] - dp[s - 1]);
}

console.log(res.join("\n"));
