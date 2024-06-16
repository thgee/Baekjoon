let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => Number(it));

let [N, M] = input;

M = String(M)
  .split("")
  .map((it) => Number(it));
let res = [];

for (let i = 0; i < M.length; i++) {
  res.unshift(N * M[i]);
}
res.push(res.reduce((acc, cur, i) => acc + cur * 10 ** i, 0));

console.log(res.join("\n"));
