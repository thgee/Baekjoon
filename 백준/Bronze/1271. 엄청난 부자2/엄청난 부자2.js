let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split(" ");

let [n, m] = arr.map((it) => BigInt(it));

console.log(String(n / m));
console.log(String(n % m));
