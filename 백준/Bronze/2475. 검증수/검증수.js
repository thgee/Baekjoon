let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split(" ");

arr = arr.map((it) => Number(it));

console.log(arr.reduce((acc, cur) => acc + cur ** 2, 0) % 10);
