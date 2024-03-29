let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim();

let N = Number(arr);
let res = 1;
for (let i = 1; i <= N; i++) res *= i;

console.log(res);
