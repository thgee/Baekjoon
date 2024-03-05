let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.split(" ").map((it) => Number(it)));

let sum = arr.shift();
arr.shift();
for (let [cost, num] of arr) {
  sum -= cost * num;
}

console.log(sum === 0 ? "Yes" : "No");