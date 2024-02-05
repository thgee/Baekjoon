let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, arr] = input;
n = Number(n);
arr = arr
  .trim()
  .split(" ")
  .map((it) => Number(it));
// ------------------------------------------------------------------

const isPrime = (num) => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num !== 1 && true;
};

let cnt = 0;
for (let i = 0; i < n; i++) if (isPrime(arr[i])) cnt++;
console.log(cnt);
