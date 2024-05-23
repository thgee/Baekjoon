let fs = require("fs");
const { toASCII } = require("punycode");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.trim())
  .map((it) => it.split(" ").map((it) => Number(it)));

const [N, A, B] = input;

A.sort((n, p) => p - n);
B.sort((n, p) => n - p);

let res = 0;
for (let i = 0; i < N; i++) {
  res += A[i] * B[i];
}

console.log(res);
