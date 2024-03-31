let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim();

let N = Number(arr);

for (let i = 1; i <= 9; i++) console.log(`${N} * ${i} = ${N * i}`);
