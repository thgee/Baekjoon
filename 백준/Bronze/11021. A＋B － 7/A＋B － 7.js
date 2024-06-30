let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.split(" ").map((it) => Number(it)));

const [N] = input.shift();

res = [];

for (let i = 0; i < N; i++)
  res.push(`Case #${i + 1}: ${input[i].reduce((acc, cur) => acc + cur)}`);

console.log(res.join("\n"));