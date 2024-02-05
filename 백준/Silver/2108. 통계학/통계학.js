let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, ...arr] = input;
n = Number(n);
arr = arr.map((it) => Number(it));
// ------------------------------------------------------------------

let res = [];

arr.sort((next, prev) => next - prev);
res.push(Math.round(arr.reduce((acc, cur) => acc + cur) / n));
res.push(arr[parseInt(n / 2)]);

let tmp = arr.reduce((acc, cur) => {
  acc.set(cur, (acc.get(cur) || 0) + 1);
  return acc;
}, new Map());

let p = [];
let max = Number.MIN_SAFE_INTEGER;
for (let [k, v] of tmp) {
  if (v > max) {
    p = [k];
    max = v;
  } else if (v === max) {
    p.push(k);
  }
}
if (p.length > 1) {
  p.sort((next, prev) => next - prev);
  res.push(p[1]);
} else res.push(p[0]);

res.push(Math.max(...arr) - Math.min(...arr));
console.log(res.join("\n"));
