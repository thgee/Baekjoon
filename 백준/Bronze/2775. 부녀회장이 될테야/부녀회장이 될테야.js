let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let T = Number(input.shift());
let arr = input.map((it) => Number(it));

// ------------------------------------------------------------------
let res = [];
let DP = Array.from({ length: 15 }, () => Array(15).fill(0));

const DFS = (k, n) => {
  if (DP[k][n] !== 0) return DP[k][n];
  if (k === 0) {
    return n;
  }
  let sum = 0;
  for (let i = 1; i <= n; i++) sum += DFS(k - 1, i);
  DP[k][n] = sum;
  return sum;
};

for (let i = 0; i < T; i++) {
  res.push(DFS(arr[2 * i], arr[2 * i + 1]));
}

console.log(res.join("\n"));
