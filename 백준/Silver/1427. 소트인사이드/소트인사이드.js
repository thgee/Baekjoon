let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("")
  .map((it) => String(it));

arr.sort((n, p) => p - n);

console.log(arr.join(""));
