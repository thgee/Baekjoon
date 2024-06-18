let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.split(" ").map((it) => Number(it)));

const [N, M, Q] = input.shift();

const [arr, queryArr] = [input.slice(0, N), input.slice(N)];

for (let [opr, i, j, k] of queryArr) {
  if (opr === 0) arr[i][j] = k;
  else [arr[i], arr[j]] = [arr[j], arr[i]];
}

console.log(arr.map((it) => it.join(" ")).join("\n"));
