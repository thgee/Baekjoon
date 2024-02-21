let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");

let N = arr.shift();

arr = arr[0]
  .split(" ")
  .map((it) => Number(it))
  .sort((n, p) => n - p);

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr.slice(0, i + 1).reduce((acc, cur) => acc + cur);
}

console.log(sum);
