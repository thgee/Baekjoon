let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(arr.shift());
let m = Number(arr.shift());
arr = arr.shift().trim();

let target = "";

for (let i = 0; i < n; i++) {
  target += "IO";
  if (i === n - 1) target += "I";
}
let cnt = 0;
let i = 0;
while (1) {
  i = arr.indexOf(target, i);
  if (i++ === -1) break;
  cnt++;
}
console.log(cnt);
