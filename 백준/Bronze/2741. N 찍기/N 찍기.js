let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim();

let N = Number(arr);
let res = [];
for (let i = 1; i <= N; i++) res.push(i);

console.log(res.join("\n"));
