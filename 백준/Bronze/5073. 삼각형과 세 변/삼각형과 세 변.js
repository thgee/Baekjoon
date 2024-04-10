let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.split(" ").map((it) => Number(it)));

arr.pop();

let res = [];
for (let [a, b, c] of arr) {
  if (a + b + c - 2 * Math.max(a, b, c) <= 0) res.push("Invalid");
  else if (a === b && b === c) res.push("Equilateral");
  else if (a === b || b === c || c === a) res.push("Isosceles");
  else res.push("Scalene");
}

console.log(res.join("\n"));
