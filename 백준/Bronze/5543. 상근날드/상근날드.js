let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => Number(it));

console.log(Math.min(...arr.slice(0, 3)) + Math.min(...arr.slice(3, 5)) - 50);
