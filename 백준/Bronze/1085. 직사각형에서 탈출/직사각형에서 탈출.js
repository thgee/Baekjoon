let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((it) => Number(it));

const [x, y, w, h] = arr;

len = Math.min(x, y, w - x, h - y);

console.log(len);
