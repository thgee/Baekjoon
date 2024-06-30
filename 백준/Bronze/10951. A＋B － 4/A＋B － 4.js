let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.split(" ").map((it) => Number(it)));

res = [];

for (let i = 0; i < input.length; i++)
  res.push(input[i].reduce((acc, cur) => acc + cur));

console.log(res.join("\n"));
