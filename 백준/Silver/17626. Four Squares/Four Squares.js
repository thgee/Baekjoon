let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
let n = Number(input);

let dp = Array.from({ length: n + 1 }, () => 5);
dp[0] = 0;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= parseInt(Math.sqrt(i)); j++) {
    dp[i] = Math.min(dp[i], dp[i - j ** 2] + 1);
  }
}

console.log(dp[n]);
