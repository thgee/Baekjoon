let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.split(" ").map((it) => it.trim()));

arr.pop();

let res = [];
for (let [n, a, w] of arr) {
  if (a > 17 || w >= 80) res.push(`${n} Senior`);
  else res.push(`${n} Junior`);
}
console.log(res.join("\n"));
