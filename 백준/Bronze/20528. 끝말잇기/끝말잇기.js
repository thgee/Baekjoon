let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.trim().split(" "));

const [N, arr] = input;

let res = 1;
let fir = arr[0][0];
for (let x of arr) {
  if (x[0] !== fir) {
    res = 0;
    break;
  }
}

console.log(res);
