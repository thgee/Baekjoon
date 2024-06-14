let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("")
  .map((it) => Number(it));

arr.sort((n, p) => p - n);

if (arr.pop() !== 0 || arr.reduce((acc, cur) => acc + cur) % 3 !== 0) {
  console.log(-1);
  return;
}
console.log(arr.join("") + "0");
