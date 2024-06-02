let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.split(" ").map((it) => Number(it)));

const [[N, M], arr] = input;

let res = "";
for (let x of arr) {
  res += `${x - M * N} `;
}

console.log(res);
