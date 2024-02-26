let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split(" ");

let [n, m] = arr.map((it) => Number(it));
let z = Math.floor((m * 100) / n);
let res = z >= 99 ? -1 : Math.ceil((-100 * m + n * (z + 1)) / (100 - (z + 1)));
console.log(res);