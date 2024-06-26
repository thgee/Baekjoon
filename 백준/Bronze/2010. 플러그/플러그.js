let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => Number(it));

let N = input.shift();

console.log(input.reduce((acc, cur) => acc + cur - 1, 1));
