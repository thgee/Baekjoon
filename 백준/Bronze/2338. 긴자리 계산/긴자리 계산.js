let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => BigInt(it));
let [a, b] = arr;

let res = [a + b, a - b, a * b];
console.log(res.join("\n"));
