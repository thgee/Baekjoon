let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim();
let n = Number(arr);

let dp = [];
dp[1] = 1;
dp[2] = 3;
for (let i = 3; i <= n; i++) {
  dp[i] = ((dp[i - 1] % 10007) + ((dp[i - 2] * 2) % 10007)) % 10007;
}
console.log(dp[n]);
