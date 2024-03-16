let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.trim());

let [s1, s2] = arr;
let [n, m] = [s1.length, s2.length];

let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

let res = [];
for (let i = 1; i < n + 1; i++)
  for (let j = 1; j < m + 1; j++)
    dp[i][j] =
      s1[i - 1] === s2[j - 1]
        ? dp[i - 1][j - 1] + 1
        : (dp[i][j] = dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]));

let [i, j] = [n, m];
while (1) {
  if (dp[i][j] === 0) break;
  if (dp[i][j] === dp[i - 1][j]) i--;
  else if (dp[i][j] === dp[i][j - 1]) j--;
  else {
    res.unshift(s1[i - 1]); // res에 삽입되는 문자는 두 문자열에서 공통된 문자임
    i--;
    j--;
  }
}
console.log(dp[n][m]);
console.log(res.join(""));
