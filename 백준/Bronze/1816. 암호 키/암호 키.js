let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => BigInt(it));

let N = input.shift();

const isPrime = (num) => {
  if (num === 1) return true;
  for (let i = 2; i <= 10 ** 6; i++) {
    if (Number(num % BigInt(i)) === 0) return false;
  }
  return true;
};
const res = [];
for (let x of input) {
  res.push(isPrime(x) ? "YES" : "NO");
}

console.log(res.join("\n"));
