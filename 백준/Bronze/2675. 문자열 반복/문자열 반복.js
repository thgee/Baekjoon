let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.trim().split(" "));

const N = Number(arr.shift());

let res = "";
for (let [n, str] of arr) {
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < Number(n); j++) {
      res += str[i];
    }
  }
  res += "\n";
}

console.log(res);
