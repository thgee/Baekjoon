let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, ...arr] = input;
arr = arr.map((it) => Number(it));
// ------------------------------------------------------------------

arr.sort((next, prev) => next - prev);
console.log(arr.join("\n"));
