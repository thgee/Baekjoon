const { time } = require("console");
const { subscribe } = require("diagnostics_channel");
let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.split(" ").map((it) => Number(it)));

let N = input.shift();
let res = [];
let arr = input.shift();
input.shift();

const dp = Array.from({ length: N }, () =>
  Array.from({ length: N }, () => false)
);

for (let i = 0; i < arr.length; i++) {
  // 원소 하나짜리 부분수열 팰린드롬 처리
  dp[i][i] = true;
  // 원소 두개짜리 펠린드롬 처리
  if (i < arr.length - 1 && arr[i] === arr[i + 1]) dp[i][i + 1] = true;
}

// 2차원 배열인 dp를 마지막 줄 부터 역방향으로 갱신 (dp 배열을 그려보면 왜 역방향인지 이해가 갈 것이다)
for (let i = N - 1 - 2; i >= 0; i--) {
  for (let j = i + 2; j <= N - 1; j++) {
    if (arr[i] === arr[j] && dp[i + 1][j - 1]) dp[i][j] = true;
  }
}

for (let [s, e] of input) {
  res.push(Number(dp[s - 1][e - 1]));
}

console.log(res.join("\n"));
