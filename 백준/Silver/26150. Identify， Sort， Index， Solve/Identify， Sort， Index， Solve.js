let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.trim().split(" "));

const [N] = input.shift();

input.sort((n, p) => Number(n[1]) - Number(p[1]));

let res = [];
for (let [str, a, b] of input) {
  b = Number(b) - 1;

  res.push(str[b]);
}

console.log(res.join("").toUpperCase());
