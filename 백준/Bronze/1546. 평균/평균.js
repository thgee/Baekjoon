let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, arr] = input;
arr = arr.split(" ").map((it) => parseInt(it));
// -------------------------------------------------------------------------

let M = Math.max(...arr);
console.log(
  arr.map(it => (it / M) * 100).reduce((acc, cur) => acc + cur) / arr.length
);
