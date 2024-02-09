let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");
let n = Number(arr.shift());
arr = arr.map((it) => Number(it));

// ------------------------------------------------------------------

let cut = Math.round(n * 0.15);
arr.sort((n, p) => n - p);
let sum = 0;
for (let i = cut; i < n - cut; i++) {
  sum += arr[i];
}

console.log(n && Math.round(sum / (n - cut * 2)));
