let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((it) => Number(it));

let [H, W, N, M] = arr;

let c = Math.ceil(H / (N + 1));
let r = Math.ceil(W / (M + 1));

console.log(c * r);
