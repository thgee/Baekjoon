let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.trim())
  .map((it) => it.split(" ").map((it) => Number(it)));

const [N, arr1, arr2] = input;

let cnt = 0;
for (let i = 0; i < N; i++) if (arr1[i] <= arr2[i]) cnt++;

console.log(cnt);
