let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.split(" ").map((it) => Number(it)));

let [N] = arr.shift();
arr = arr.shift();

let min = Number.MAX_SAFE_INTEGER;
let res = [];
arr.sort((n, p) => n - p);

for (let i = 0, j = N - 1; i < j; ) {
  let sum = arr[i] + arr[j];

  if (Math.abs(sum) < min) {
    res = [arr[i], arr[j]];
    min = Math.abs(sum);
  }
  if (sum > 0) j--;
  else if (sum < 0) i++;
  else break;
}

console.log(res.join(" "));
