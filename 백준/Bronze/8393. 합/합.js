let fs = require("fs"); const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"; let arr = fs.readFileSync(filePath).toString().trim();

let n = Number(arr);

let sum = 0; for (let i = 1; i <= n; i++) { sum += i; }

console.log(sum);