let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((it) => Number(it));

const [N, M] = arr;
console.log(M * 2 - N);
