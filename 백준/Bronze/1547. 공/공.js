let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.split(" ").map((it) => Number(it)));

let [N] = arr.shift();

let ball = 1;
for (let [s, e] of arr) {
  if (s === ball) ball = e;
  else if (e === ball) ball = s;
}

console.log(ball);
