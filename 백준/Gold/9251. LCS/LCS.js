let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.trim());

let [s1, s2] = arr;

let dp = Array.from({ length: s1.length + 1 }, () =>
  Array(s2.length + 1).fill(0)
);

for (let i = 1; i < s1.length + 1; i++)
  for (let j = 1; j < s2.length + 1; j++)
    dp[i][j] =
      s1[i - 1] === s2[j - 1]
        ? dp[i - 1][j - 1] + 1
        : (dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]));
console.log(dp[s1.length][s2.length]);
