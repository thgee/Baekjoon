let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, ...arr] = input;
arr = arr.map((it) => it.trim().split(" "));

// ------------------------------------------------------------------

arr.sort((next, prev) => Number(next[0]) - Number(prev[0]));
console.log(arr.map((it) => `${it[0]} ${it[1]}`).join("\n"));
