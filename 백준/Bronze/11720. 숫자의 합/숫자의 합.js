let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");
let n = String(arr[1]);

console.log(n.split("").reduce((acc, cur) => Number(cur) + acc, 0));
