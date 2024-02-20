let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m, arr] = input;

let target = "";

for (let i = 0; i < n; i++) {
  target += "IO";
  if (i === n - 1) target += "I";
}

let res = 0;
let cnt = 1;
for (let i = 0; i < arr.length - 2; i++) {
  if (arr.slice(i, i + 3) === "IOI") {
    i++;
    cnt += 2;
  } else {
    if (cnt >= target.length) res += (cnt - target.length) / 2 + 1;
    cnt = 1;
  }
}
if (cnt >= target.length) res += (cnt - target.length) / 2 + 1;
console.log(res);
