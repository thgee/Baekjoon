let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.split(" ").map((it) => Number(it)));

input.shift();

let res = [];
for (let [a, b] of input) {
  res.push(a + b);
}

console.log(res.join("\n"));
